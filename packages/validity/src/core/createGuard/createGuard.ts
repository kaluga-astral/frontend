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

/**
 * @description Интерфейс функции guard, которая в прототипе содержит метод define
 */
interface Guard<ValidationType extends ValidationTypes, TValues> {
  (
    value?: unknown,
    ctx?: Parameters<ValidationRule<ValidationType, TValues>>[1],
  ): ReturnType<ValidationRule<ValidationType, TValues>>;
  /**
   * @description Функция для создания нового guard с переопределенными дефолтными параметрами. Возвращает новый guard
   * @param options - параметры, позволяющие переопределить дефолтные настройки guard
   * @example string.define({ requiredMessage: 'ИНН не может быть пустым' })(inn())
   */
  define(options: DefOptions): Guard<ValidationType, TValues>;
}

/**
 * @description Функция, которая позволяет определять частную логику для guard
 */
type GuardExecutor = (
  value: unknown,
  ctx: ValidationContext<unknown>,
) => ValidationResult;

/**
 * @description Фабрика по создания guard'ов. Guard - функция, проверяющая тип значения
 * По-дефолту проверяет value на required. Для выключения required необходимо использовать optional().
 * После первого вызова guard в прототипу функции становится доступен метод define, который позволяет переопределить дефолтное поведение guard (например, изменить текст для required правила)
 */
export const createGuard = <ValidationType extends ValidationTypes, TValues>(
  executeGuard: GuardExecutor,
): Guard<ValidationType, TValues> => {
  // выделено в отдельную именованную функцию для того, чтобы ее можно было рекрусивно вызвать в define
  const createInnerGuard = (
    defOptions: DefOptions = {},
  ): Guard<ValidationType, TValues> => {
    const guard: Guard<ValidationType, TValues> = (value, ctx) => {
      // контекст создается, если он не был создан раннее
      const currentCtx = createContext<ValidationType, unknown>(
        ctx,
        // при создании контекста сейчас не имеет значение какого типа будет ctx.values
        value as ValidationType,
      );

      // делает guard required, если в контексте isOptional false. Контекст модифицируется вышестоящими правилами
      if (!currentCtx.isOptional) {
        return compose<unknown, unknown>(
          // возможность переопределить дефолтный message для required
          required({ message: defOptions.requiredErrorMessage }),
          (interValue, interCtx) =>
            executeGuard(
              interValue,
              interCtx as ValidationContext<ValidationType>,
            ),
        )(value, currentCtx);
      }

      return executeGuard(value, currentCtx);
    };

    guard.define = (overridesDefOptions) =>
      createInnerGuard(overridesDefOptions);

    return guard;
  };

  return createInnerGuard();
};

// const object = <Schema extends Record<string, unknown>, TValues = Schema>(
//   schema: Schema,
// ) => createGuard<Schema, TValues>((value, ctx) => undefined);
//
// object<{ k: string }>({ k: '' })(88);
//
// const awesomeObject = object<{ k: string }>({ k: '' }).define({
//   requiredErrorMessage: '',
// });
//
// awesomeObject({});
//
// const string = <TValues = unknown>(
//   ...rules: ValidationRule<string, TValues>[]
// ) => createGuard<string, TValues>((value, ctx) => undefined);
//
// string()(22);
