import { CONTAINS_SPACES_REGEX, INCORRECT_MESSAGE } from '../constants';
import { createRule } from '../createRule';

export const getDefaultMessage = (min: number) => {
  return `Должно быть больше чем ${min}`;
};

/**
 * @description Проверяет минимальное значение value
 * @example isMinValue(10)(1239123);
 * @param {number} [min] Минимальное значение value
 * @param {unknown} [value] проверяемое значение
 */
export const isMinValue = createRule<{ min: number; message?: string }, false>(
  ({ min, message = `Должно быть больше чем ${min}` } = { min: 0 }) =>
    (value) => {
      if (
        typeof value === 'string' &&
        !isNaN(Number(value)) &&
        !CONTAINS_SPACES_REGEX.test(value) &&
        value !== ''
      ) {
        if (parseFloat(value) >= min) {
          return undefined;
        }

        return message;
      }

      if (typeof value !== 'number' || isNaN(value)) {
        return INCORRECT_MESSAGE;
      }

      if (value >= min) {
        return undefined;
      }

      return message;
    },
);
