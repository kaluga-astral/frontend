import isEmpty from 'lodash.isempty';

import { createRule } from '../createRule';
import { INCORRECT_MESSAGE } from '../constants';
import { isEmptyString } from '../utils';
import { Message } from '../types';

export const getDefaultMessage = (min: number) => `Мин. символов: ${min}`;

/**
 * @description Проверяет минимальную длину value
 * @example isMinLength({ min: 10 })(1239123);
 * @example isMinLength({ min: 10 })('1239123');
 * @param {number} [min] Минимальная длина value
 * @param {unknown} [value] проверяемое значение
 */
export const isMinLength = createRule<
  { message?: Message; min: number },
  false
>(
  (
      {
        min,
        message = {
          defaultMessage: `Мин. символов: ${min}`,
          incorrectValue: INCORRECT_MESSAGE,
        },
      } = { min: 0 },
    ) =>
    (value?: unknown): string | undefined => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (min < 0) {
        throw new Error('Значение параметра `min` должно быть >= 0');
      }

      if (typeof value === 'string' || Array.isArray(value)) {
        return value.length < min ? message.defaultMessage : undefined;
      }

      if (typeof value !== 'string' || !Array.isArray(value)) {
        return message.incorrectValue;
      }

      if (isEmpty(value)) {
        return undefined;
      }

      return undefined;
    },
);
