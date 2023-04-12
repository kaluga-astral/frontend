import {
  ValidationContext,
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
    value: unknown,
    ctx?: ValidationContext<unknown>,
  ) => ValidationResult;
  define(): Guard<ValidationType>;
}

/**
 * @description Фабрика для создания guard (правила, проверяющие тип value)
 * По дефолту проверяет поле на required
 * @param checkType - функция проверки типа
 */
export const createGuard =
  <ValidationType extends ValidationTypes>(
    checkType: CheckType,
  ): Guard<ValidationType> =>
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
      return [required, ...rules][0](value as ValidationType, currentCtx);
    }

    return typeError;
  };
