import { INCORRECT_MESSAGE } from '../constants';
import { createRule } from '../createRule';

export const getDefaultMessage = (max: number) => {
  return `Должно быть меньше чем ${max}`;
};

/**
 * @description Проверяет максимальное значение value
 * @example isMaxValue(10)(1239123);
 * @param {number} [max] Максимальное значение value
 * @param {unknown} [value] проверяемое значение
 */
export const isMaxValue = createRule(
  (max: number, message: string = `Должно быть меньше чем ${max}`) =>
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

      if (max < 0) {
        throw new Error('Значение параметра `max` должно быть >= 0');
      }

      return message;
    },
);
