import {
  ValidationContext,
  ValidationResult,
  ValidationRule,
  ValidationTypes,
} from '../types';
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
 */
type RuleCreator<
  ValidationType extends ValidationTypes,
  Params extends object,
  RequiredParams extends boolean,
> = RequiredParams extends true
  ? (
      params: RuleParams<Params, ValidationType, unknown>,
    ) => ValidationRule<ValidationType, unknown>
  : (
      params?: RuleParams<Params, ValidationType, unknown>,
    ) => ValidationRule<ValidationType, unknown>;

/**
 * @description Перегрузка для функций, в которых params optional
 */
export function createRule<
  ValidationType extends ValidationTypes,
  Params extends object,
  RequiredParams extends true,
>(
  creator: RuleCreator<ValidationType, Params, RequiredParams>,
): <TValues>(
  params: RuleParams<Params, ValidationType, TValues>,
) => (
  value: ValidationType,
  ctx?: ValidationContext<TValues>,
) => ValidationResult;

/**
 * @description Перегрузка для функций, в которых params required
 */
export function createRule<
  ValidationType extends ValidationTypes,
  Params extends object,
  RequiredParams extends false,
>(
  creator: RuleCreator<ValidationType, Params, RequiredParams>,
): <TValues>(
  params?: RuleParams<Params, ValidationType, TValues>,
) => (
  value: ValidationType,
  ctx?: ValidationContext<TValues>,
) => ValidationResult;

/**
 * @description Фабрика для создания правил валидаций
 * Добавляет для каждого rule возможность указать исключения (params.exclude) и создает ctx, если он не был создан раннее
 */
export function createRule<
  ValidationType extends ValidationTypes,
  Params extends object,
  RequiredParams extends boolean,
>(creator: RuleCreator<ValidationType, Params, RequiredParams>) {
  return <TValues>(params?: RuleParams<Params, ValidationType, TValues>) =>
    (value: ValidationType, ctx?: ValidationContext<TValues>) => {
      const currentCtx = createContext<ValidationType, TValues>(ctx, value);

      if (params?.exclude?.(value, currentCtx)) {
        return undefined;
      }

      // приведение необходимо для того, чтобы работала перегрузка
      return creator(params as RuleParams<Params, ValidationType, unknown>)(
        value,
        currentCtx,
      );
    };
}
