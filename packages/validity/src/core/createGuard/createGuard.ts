import {
  ValidationContext,
  ValidationObjectType,
  ValidationResult,
  ValidationRule,
  ValidationTypes,
} from '../types';
import { required } from '../required';
import { createContext } from '../createContext';

type CheckType = (
  value: unknown,
  ctx: ValidationContext<unknown>,
) => ValidationResult;

interface Guard<ValidationType extends ValidationTypes> {
  (...rules: ValidationRule<ValidationType, unknown>[]): (
    value?: unknown,
    ctx?: ValidationContext<unknown>,
  ) => ValidationResult;
  define(): Guard<ValidationType>;
}

/**
 * @description Фабрика, создающая guard  (правила, проверяющие тип value)
 * По дефолту проверяет поле на required
 * @param checkType - функция проверки типа
 */
export const createGuard = <ValidationType extends ValidationTypes>(
  checkType: CheckType,
): Guard<ValidationType> => {
  const composeRules: Guard<ValidationType> =
    (...rules) =>
    (value, ctx) => {
      // контекст создается, если он не был создан раннее
      const currentCtx = createContext<ValidationType, unknown>(
        ctx,
        // при создании контекста сейчас не имеет значение какого типа будет ctx.values
        value as ValidationType,
      );

      const typeError = checkType(value, currentCtx);

      if (!typeError) {
        // добавляет required в список валидаций
        return [required, ...rules][0](value, currentCtx);
      }

      return typeError;
    };

  composeRules.define = () => composeRules;

  return composeRules;
};

type Creator<Params> = (
  ...params: Params[]
) => (value: unknown, ctx: ValidationContext<unknown>) => ValidationResult;

const advCreateGuard =
  <ValidationType extends ValidationTypes, Params>(creator: Creator<Params>) =>
  (...params: Params[]): ValidationRule<unknown, unknown> =>
  (value, ctx) => {
    // контекст создается, если он не был создан раннее
    const currentCtx = createContext<ValidationType, unknown>(
      ctx,
      // при создании контекста сейчас не имеет значение какого типа будет ctx.values
      value as ValidationType,
    );

    // TODO: composeRules(required(), creator(...params))(value, currentCtx)
    return creator(...params)(value, currentCtx);
  };

const object = advCreateGuard<ValidationObjectType, object>(
  (object) => (value, ctx) => undefined,
);
const string = advCreateGuard(
  (...rules: string[]) =>
    () =>
      undefined,
);

object({});
string('', '', '');
