import {
  ValidationContext,
  ValidationObjectType,
  ValidationResult,
  ValidationRule,
  ValidationTypes,
} from '../types';
import { required } from '../required';
import { createContext } from '../createContext';
import { compose } from '../compose';

type DefOptions = {
  /**
   * @description Переопределяет дефолтное сообщения ошибки для required
   * @example string.define({ requiredMessage: 'ИНН не может быть пустым' })(inn())
   */
  requiredErrorMessage?: string;
};

interface Guard<ValidationType extends ValidationTypes, Params> {
  <TValues = ValidationType>(...params: Params[]): ValidationRule<
    ValidationType,
    TValues
  >;
  /**
   * @description Функция для создания нового guard с переопределенными дефолтными параметрами. Возвращает новый guard
   * @param options - параметры, позволяющие переопределить дефолтные настройки guard
   * @example string.define({ requiredMessage: 'ИНН не может быть пустым' })(inn())
   */
  define(options: DefOptions): Guard<ValidationType, Params>;
}

/**
 * @description Функция, которая позволяет определять частную логику для guard
 */
type GuardCreator<Params> = (
  ...params: Params[]
) => (value: unknown, ctx: ValidationContext<unknown>) => ValidationResult;

const createGuard = <ValidationType extends ValidationTypes, Params>(
  guardCreator: GuardCreator<Params>,
): Guard<ValidationType, Params> => {
  const guard: Guard<ValidationType, Params> =
    (...params) =>
    (value, ctx) => {
      // контекст создается, если он не был создан раннее
      const currentCtx = createContext<ValidationType, unknown>(
        ctx,
        // при создании контекста сейчас не имеет значение какого типа будет ctx.values
        value as ValidationType,
      );

      const callGuard = guardCreator(...params);

      // делает guard required, если в контексте isOptional false. Контекст модифицируется вышестоящими правилами
      if (!currentCtx.isOptional) {
        return compose<unknown, unknown>(required, (interValue, interCtx) =>
          callGuard(interValue, interCtx as ValidationContext<ValidationType>),
        )(value, currentCtx);
      }

      return callGuard(value, currentCtx);
    };

  guard.define = () => guard;

  return guard;
};

const createCompositeGuard =
  <ValidationType extends ValidationTypes>(
    guardCreator: GuardCreator<ValidationRule<ValidationType, any>>,
  ) =>
  <TValues>(...params: ValidationRule<ValidationType, TValues>[]) =>
    createGuard<ValidationType, ValidationRule<ValidationType, TValues>>(
      guardCreator,
    )(...params);

const string = createCompositeGuard<string>(
  (...rules) =>
    () =>
      undefined,
);

const object = createGuard<ValidationObjectType, object>(
  (object) => (value, ctx) => undefined,
);

const obj1 = object.define({ requiredErrorMessage: '' });

obj1<{ a: string }>({})({});

string<{ l: string }>((value, ctx) => {
  if (ctx?.values.l) {
    return undefined;
  }

  return undefined;
});
