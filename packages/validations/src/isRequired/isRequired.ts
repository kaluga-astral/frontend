import isEmpty from 'lodash.isempty';

import { createRule } from '../createRule';

export const REQUIRED_RULE_DEFAULT_MESSAGE = 'Не заполнено';

/**
 * @description Проверяет присутсвует ли value
 * @example isRequired();
 * @example isRequired('ИНН обязателен');
 */
export const isRequired = createRule<{ message?: string }, false>(
  ({ message = REQUIRED_RULE_DEFAULT_MESSAGE } = {}) =>
    (value) => {
      if (typeof value === 'number' || value instanceof Date) {
        return undefined;
      }

      if (typeof value === 'string') {
        return value.trim() ? undefined : message;
      }

      if (typeof value === 'boolean') {
        return value ? undefined : message;
      }

      if (!isEmpty(value)) {
        return undefined;
      }

      return message;
    },
);
