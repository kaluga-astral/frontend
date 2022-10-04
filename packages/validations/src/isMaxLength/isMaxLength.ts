import isEmpty from 'lodash.isempty';

import { createRule } from '../createRule';
import { INCORRECT_MESSAGE } from '../constants';
import { isEmptyString } from '../utils';

export const getDefaultMessage = (max: number) => `Макс. символов: ${max}`;

/**
 * @description Проверяет максимальную длину value
 * @example isMaxLength({ max: 10 })(1239123);
 * @example isMaxLength({ max: 10 })('1239123');
 * @param {number} [max] Максимальная длина value
 * @param {unknown} [value] проверяемое значение
 */
export const isMaxLength = createRule<{ max: number; message?: string }, false>(
  ({ max, message = getDefaultMessage(max) } = { max: 0 }) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (max < 0) {
        throw new Error('Значение параметра `max` должно быть >= 0');
      }

      if (typeof value === 'string' || Array.isArray(value)) {
        return value.length > max ? message : undefined;
      }

      if (typeof value !== 'string' || !Array.isArray(value)) {
        return INCORRECT_MESSAGE;
      }

      if (isEmpty(value)) {
        return undefined;
      }

      return undefined;
    },
);
