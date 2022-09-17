import { InitializedRule } from '../types';
import { flow } from '../flow';

/**
 * @description Объеденяет правила в цепочку и форматирует результат в одну строку. Останаваливается при возникновении ошибки. Работает слева направо
 * Подходит в качестве адаптера к react-final-form
 * @example flowToString(isIncludeDot(), isIncludeComma());
 * @example flowToString(isRequired(), flowToString(isIncludeDot(), isIncludeComma()));
 */
export const flowToString =
  (...rules: InitializedRule[]) =>
  (value?: unknown): string | undefined => {
    const validationResult = flow(...rules)(value);

    if (Array.isArray(validationResult)) {
      return validationResult[0];
    }

    return validationResult;
  };
