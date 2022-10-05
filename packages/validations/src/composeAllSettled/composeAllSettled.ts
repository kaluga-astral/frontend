import { InitializedRule, ValidationResult } from '../types';

/**
 * @description Объединяет переданные правила в цепочку правил, выполняя все переданные правила, независимо от результата выполнения правил. Выполняет правила слева направо
 * @example composeAllSettled(isIncludeDot(), isIncludeComma());
 * @example compose(isRequired(), composeAllSettled(isIncludeDot(), isIncludeComma()));
 */
export const composeAllSettled =
  (...rules: InitializedRule[]) =>
  (value: unknown): ValidationResult => {
    const errors: string[] = [];

    rules.forEach((rule) => {
      const error = rule(value);

      if (Array.isArray(error)) {
        errors.push(...error);
      }

      if (typeof error === 'string') {
        errors.push(error);
      }
    });

    if (!errors.length) {
      return undefined;
    }

    return errors.length === 1 ? errors[0] : errors;
  };
