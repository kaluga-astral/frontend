import { createRule } from '../createRule';

export const IS_DATE_RULE_DEFAULT_MESSAGE = 'Неверный формат даты';

/**
 * @description Проверяет валидна ли дата
 * @example isDate()('2011-11-12');
 * @param {string} [value] проверяемое значение
 */
export const isDate = createRule(
  (message: string = IS_DATE_RULE_DEFAULT_MESSAGE) =>
    (value) => {
      if (value === '' || value === null || value === undefined) {
        return undefined;
      }

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
