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
 * @param {string} [message.defaultMessage] Сообщение при неудачной валидации
 * @param {string} [message.incorrectValue] Сообщение при переданном некорректном value
 */
export const isMaxLength = createRule<
  {
    max: number;
    message?: {
      defaultMessage?: string;
      incorrectValue?: string;
    };
  },
  true
>(
  ({
      max,
      message = {
        defaultMessage: getDefaultMessage(max),
        incorrectValue: INCORRECT_MESSAGE,
      },
    }) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (max < 0) {
        throw new Error('Значение параметра `max` должно быть >= 0');
      }

      if (typeof value === 'string' || Array.isArray(value)) {
        return value.length > max ? message.defaultMessage : undefined;
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
