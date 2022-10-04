import { CONTAINS_SPACES_REGEX, INCORRECT_MESSAGE } from '../constants';
import { createRule } from '../createRule';
import { isEmptyString } from '../utils';

export const getDefaultMessage = (max: number) => {
  return `Должно быть меньше чем ${max}`;
};

/**
 * @description Проверяет максимальное значение value
 * @example isMaxValue({ max: 10 })(1239123);
 * @param {number} [max] Максимальное значение value
 * @param {unknown} [value] проверяемое значение
 */
export const isMaxValue = createRule<{ message?: string; max: number }, false>(
  ({ max, message = `Должно быть меньше чем ${max}` } = { max: 0 }) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (
        typeof value === 'string' &&
        !isNaN(Number(value)) &&
        !CONTAINS_SPACES_REGEX.test(value) &&
        value !== ''
      ) {
        if (parseFloat(value) <= max) {
          return undefined;
        }

        return message;
      }

      if (typeof value !== 'number' || isNaN(value)) {
        return INCORRECT_MESSAGE;
      }

      if (value <= max) {
        return undefined;
      }

      return message;
    },
);
