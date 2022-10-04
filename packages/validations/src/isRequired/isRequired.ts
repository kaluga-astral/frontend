import isEmpty from 'lodash.isempty';

import { createRule } from '../createRule';
import { Message } from '../types';

export const REQUIRED_RULE_DEFAULT_MESSAGE = 'Не заполнено';

/**
 * @description Проверяет присутсвует ли value
 * @example isRequired();
 * @example isRequired('ИНН обязателен');
 * @param {string} [message] - 'Не заполнено'
 */
export const isRequired = createRule<{ message?: Message }, false>(
  ({
      message = {
        defaultMessage: REQUIRED_RULE_DEFAULT_MESSAGE,
      },
    } = {}) =>
    (value) => {
      if (typeof value === 'number' || value instanceof Date) {
        return undefined;
      }

      if (typeof value === 'string') {
        return value.trim() ? undefined : message.defaultMessage;
      }

      if (typeof value === 'boolean') {
        return value ? undefined : message.defaultMessage;
      }

      if (!isEmpty(value)) {
        return undefined;
      }

      return message.defaultMessage;
    },
);
