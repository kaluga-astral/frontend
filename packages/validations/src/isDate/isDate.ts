import { createRule } from '../createRule';

/**
 * @description Проверяет валидна ли дата
 * @example isDate()('2011-11-12');
 * @param {string} [value] проверяемое значение
 */
export const isDate = createRule(
  (message: string = 'Неверный формат даты') =>
    (value: unknown): string | undefined => {
      if (typeof value === 'string') {
        const date = new Date(value);

        if (Boolean(date.getTime())) {
          return undefined;
        }

        return message;
      }

      if (value instanceof Date) {
        return undefined;
      }

      return message;
    },
);
