import { InitializedRule, ValidationResult } from '../types';

/**
 * @description Объединяет переданные правила в цепочку правил, выполняя все переданные правила, независимо от результата выполнения правил.
 * Выполняет правила слева направо. Возвращает текст первой ошибки, если все правила выполнены с ошибкой
 * @example composeSome(isIncludeDot(), isIncludeComma());
 * @example compose(isRequired(), composeSome(isIncludeDot(), isIncludeComma()));
 */
export const composeSome =
  (...rules: InitializedRule[]) =>
  (value: unknown): ValidationResult => {
    const errors = rules.reduce<string[]>((errorsAcc, rule) => {
      const error = rule(value);

      if (Array.isArray(error) && error.length > 0) {
        errorsAcc.push(...error);
      }

      if (typeof error === 'string') {
        errorsAcc.push(error);
      }

      return errorsAcc;
    }, []);

    if (!errors.length) {
      return undefined;
    }

    if (errors.length < rules.length) {
      return undefined;
    }

    return errors[0];
  };
