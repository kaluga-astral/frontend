import { INCORRECT_MESSAGE } from '../constants';
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
export const isMinValue = createRule(
  (min: number, message: string = `Должно быть больше чем ${min}`) =>
    (value) => {
      if (value === '') {
        return undefined;
      }

      if (
        typeof value === 'string' &&
        !isNaN(Number(value)) &&
        !/\s/g.test(value) &&
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

      if (min < 0) {
        throw new Error('Значение параметра `min` должно быть >= 0');
      }

      return message;
    },
);
