import { createRule } from '../createRule';

/**
 * @description Проверяет минимальную длину value
 * @example isMinLength(10)(1239123);
 * @example isMinLength(10)('1239123');
 * @param {number} [min] Минимальная длина value
 * @param {unknown} [value] проверяемое значение
 */
export const isMinLength = createRule(
  (min: number, message: string = `Мин. символов: ${min}`) =>
    (value?: unknown): string | undefined => {
      if (min <= 0) {
        throw new Error('Значение параметра `min` должно быть >= 0');
      }

      if (!value) {
        return undefined;
      }

      if (typeof value === 'string' && value.length < min) {
        return message;
      }

      if (typeof value === 'number' && value.toString().length < min) {
        return message;
      }

      return undefined;
    },
);
