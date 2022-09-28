import { createRule } from '../createRule';

/**
 * @description Проверяет максимальную длину value
 * @example isMaxLength(10)(1239123);
 * @example isMaxLength(10)('1239123');
 * @param {number} [max] Максимальная длина value
 * @param {unknown} [value] проверяемое значение
 */
export const isMaxLength = createRule(
  (max: number, message: string = `Макс. символов: ${max}`) =>
    (value?: unknown): string | undefined => {
      if (max <= 0) {
        throw new Error('Значение параметра `max` должно быть >= 0');
      }

      if (!value) {
        return undefined;
      }

      if (typeof value === 'string' && value.length > max) {
        return message;
      }

      if (typeof value === 'number' && value.toString().length > max) {
        return message;
      }

      return undefined;
    },
);
