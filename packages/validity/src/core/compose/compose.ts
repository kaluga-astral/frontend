import { ValidationResult, ValidationRule } from '../types';

/**
 * @description Объединяет переданные правила в цепочку правил, останавливает выполнение цепочки, если появилась ошибка. Выполняет правила слева направо
 * @example composeRules(min(), max());
 */
export const compose =
  <ValidationType, TValues>(
    ...rules: ValidationRule<ValidationType, TValues>[]
  ): ValidationRule<ValidationType, TValues> =>
  (value, ctx) =>
    rules.reduce<ValidationResult>(
      (result, rule) => result || rule(value, ctx),
      undefined,
    );
