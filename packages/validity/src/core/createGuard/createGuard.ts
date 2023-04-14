import {
  ValidationContext,
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

interface Guard<
  ValidationType extends ValidationTypes,
  Params extends Array<unknown>,
> {
  <TValues = ValidationType>(...params: Params): ValidationRule<
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
export type GuardCreator<Params extends Array<unknown>> = (
  ...params: Params
) => (value: unknown, ctx: ValidationContext<unknown>) => ValidationResult;

export const createGuard = <
  ValidationType extends ValidationTypes,
  Params extends Array<unknown> = [],
>(
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
