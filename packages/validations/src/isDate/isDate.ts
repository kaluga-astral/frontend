import { createRule } from '../createRule';
import { isEmptyString } from '../utils';
import { Message } from '../types';

export const IS_DATE_RULE_DEFAULT_MESSAGE = 'Неверный формат даты';

/**
 * @description Проверяет валидна ли дата
 * @example isDate()('2011-11-12');
 * @param {string} [value] проверяемое значение
 */
export const isDate = createRule<{ message?: Message }, false>(
  ({
      message = {
        defaultMessage: IS_DATE_RULE_DEFAULT_MESSAGE,
      },
    } = {}) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (typeof value === 'string') {
        const date = new Date(value);

        if (!isNaN(date.getTime())) {
          return undefined;
        }

        return message.defaultMessage;
      }

      if (value instanceof Date && !isNaN(value.getTime())) {
        return undefined;
      }

      return message.defaultMessage;
    },
);
