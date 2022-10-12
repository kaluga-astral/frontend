import isEmpty from 'lodash.isempty';

import { createRule } from '../createRule';
import { INCORRECT_MESSAGE } from '../constants';
import { isEmptyString } from '../utils';

export const getDefaultMessage = (min: number) => `Мин. символов: ${min}`;

/**
 * @description Проверяет минимальную длину value
 * @example isMinLength({ min: 10 })(1239123);
 * @example isMinLength({ min: 10 })('1239123');
 * @param {number} [min] Минимальная длина value
 * @param {string} [message.defaultMessage] Сообщение при неудачной валидации
 * @param {string} [message.incorrectValue] Сообщение при переданном некорректном value
 */
export const isMinLength = createRule<
  {
    message?: {
      defaultMessage?: string;
      incorrectValue?: string;
    };
    min: number;
  },
  true
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
