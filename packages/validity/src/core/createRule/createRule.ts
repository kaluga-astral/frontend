import {
  ValidationContext,
  ValidationResult,
  ValidationRule,
  ValidationTypes,
} from '../types';
import { createContext } from '../createContext';

/**
 * @description Единые параметры для всех правил
 */
export type CommonRuleParams<ValidationType extends ValidationTypes> = {
  /**
   * @description Функция, позволяющая для каждого правила указать исключение
   */
  exclude?: (value: ValidationType, ctx: ValidationContext<unknown>) => boolean;
};

/**
 * @description Функция, которая позволяет определять частную логику для guard
 */
type RuleExecutor = (
  value: unknown,
  ctx: ValidationContext<unknown>,
) => ValidationResult;

/**
 * @description Фабрика для создания правил валидации
 * @param executor - функция, которая позволяет определять частную логику для guard
 * @param commonParams - единые параметры для всех rule
 * @example
 * ```ts
 * const inn = (params: CommonRuleParams<string> & { message?: string }) =>
 *   createRule<string>((value, ctx) => {
 *     if (!isInn(value)) {
 *       return ctx.createError({ code: Symbol(), message: params?.message || 'Неверный ИНН' });
 *     }
 *
 *     return undefined;
 *   }, params);
 * ```
 */
export const createRule =
  <ValidationType extends ValidationTypes>(
    executor: RuleExecutor,
    commonParams?: CommonRuleParams<ValidationType>,
  ) =>
  <TValues>(
    value: Parameters<ValidationRule<ValidationType, TValues>>[0],
    ctx?: Parameters<ValidationRule<ValidationType, TValues>>[1],
  ) => {
    // создается контекст, если он не был создан раннее
    const currentCtx = createContext<ValidationType, TValues>(ctx, value);

    // если value попало под исключения из правил, то дальше валидацию не продолжаем
    if (commonParams?.exclude?.(value, currentCtx)) {
      return undefined;
    }

    return executor(value, currentCtx);
  };
