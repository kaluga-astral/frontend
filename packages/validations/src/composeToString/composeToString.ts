import { InitializedRule } from '../types';
import { compose } from '../compose';

/**
 * @description Объединяет правила в цепочку и форматирует результат в одну строку. Останаваливается при возникновении ошибки. Работает слева направо
 * Подходит в качестве адаптера к react-final-form
 * @example composeToString(isIncludeDot(), isIncludeComma());
 * @example composeToString(isRequired(), composeToString(isIncludeDot(), isIncludeComma()));
 */
export const composeToString =
  (...rules: InitializedRule[]) =>
  (value?: unknown): string | undefined => {
    const validationResult = compose(...rules)(value);

    if (Array.isArray(validationResult)) {
      return validationResult[0];
    }

    return validationResult;
  };
