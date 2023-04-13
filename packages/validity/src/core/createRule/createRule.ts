import { ValidationContext, ValidationRule, ValidationTypes } from '../types';
import { createContext } from '../createContext';

/**
 * @description Params каждого rule. Позволяет в одном месте добавлять общие параметры
 */
type RuleParams<
  BaseParams extends object,
  ValidationType extends ValidationTypes,
  TValues,
> = BaseParams & {
  /**
   * @description Функция, позволяющая для каждого правила указать исключение
   */
  exclude?: (value: ValidationType, ctx: ValidationContext<TValues>) => boolean;
};

/**
 * @description Функция, создающая правила
 * @param modifications - функции для реализации advanced валидаций
 */
type RuleCreator<
  ValidationType extends ValidationTypes,
  Params extends object,
> = (
  params: RuleParams<Params, ValidationType, unknown>,
) => ValidationRule<ValidationType, unknown>;

/**
 * @description Перегрузка для функций, в которых params optional
 */
export function createRule<
  ValidationType extends ValidationTypes,
  Params extends object,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RequiredParams extends true,
>(
  creator: RuleCreator<ValidationType, Params>,
): <TValues>(
  params: RuleParams<Params, ValidationType, TValues>,
) => ValidationRule<ValidationType, TValues>;

/**
 * @description Перегрузка для функций, в которых params required
 */
export function createRule<
  ValidationType extends ValidationTypes,
  Params extends object,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RequiredParams extends false,
>(
  creator: RuleCreator<ValidationType, Params>,
): <TValues>(
  params?: RuleParams<Params, ValidationType, TValues>,
) => ValidationRule<ValidationType, TValues>;

/**
 * @description Фабрика для создания правил валидаций
 * Добавляет для каждого rule возможность указать исключения (params.exclude) и создает ctx, если он не был создан раннее
 */
export function createRule<
  ValidationType extends ValidationTypes,
  Params extends object,
>(creator: RuleCreator<ValidationType, Params>) {
  return <TValues>(
      params?: RuleParams<Params, ValidationType, TValues>,
    ): ValidationRule<ValidationType, TValues> =>
    (value, ctx) => {
      // создается контекст, если он не был создан раньше
      const currentCtx = createContext<ValidationType, TValues>(ctx, value);

      // если value попало под исключения из правил, то дальше валидацию не продолжаем
      if (params?.exclude?.(value, currentCtx)) {
        return undefined;
      }

      return creator(params as RuleParams<Params, ValidationType, unknown>)(
        value,
        currentCtx,
      );
    };
}
