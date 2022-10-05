import { InitializedRule, ValidationResult } from '../types';

/**
 * @description Объединяет переданные правила в цепочку правил, останавливает выполнение цепочки, если появилась ошибка. Выполняет правила слева направо
 * @example compose(isRequired(), isEmail());
 * @example compose(isRequired(), compose(isIncludeDot(), isIncludeComma()));
 */
export const compose =
  (...rules: InitializedRule[]) =>
  (value: unknown): ValidationResult =>
    rules.reduce<ValidationResult>(
      (result, rule) => result || rule(value),
      undefined,
    );
