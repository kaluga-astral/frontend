import { createRule } from '../createRule';

/**
 * @description Проверяет минимальное значение value
 * @example isMinValue(10)(1239123);
 * @param {number} [min] Минимальное значение value
 * @param {unknown} [value] проверяемое значение
 */
export const isMinValue = createRule(
  (min: number, message: string = `Должно быть больше чем ${min}`) =>
    (value: unknown) => {
      if (typeof value === 'number' && value < min) {
        return message;
      }

      if (typeof value !== 'number') {
        return 'Должно иметь тип number';
      }

      return undefined;
    },
);
