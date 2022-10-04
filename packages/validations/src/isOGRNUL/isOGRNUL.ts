import { createRule } from '../createRule';
import { isEmptyString } from '../utils';
import { Message } from '../types';

export const IS_OGRNUL_DEFAULT_MESSAGE = 'Некорректный ОГРН ЮЛ';

const OGRNUL_LENGTH = 13;

/**
 * @description Проверяет валиден ли ОРГН ЮЛ
 * @example isOGRNUL()('7728168971');
 * @param {string} [value] проверяемое значение
 */
export const isOGRNUL = createRule<{ message?: Message }, false>(
  ({
      message = {
        defaultMessage: IS_OGRNUL_DEFAULT_MESSAGE,
      },
    } = {}) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (typeof value === 'string') {
        if (value.length !== OGRNUL_LENGTH) {
          return message.defaultMessage;
        }

        const checkSum = (parseInt(value.slice(0, -1)) % 11)
          .toString()
          .slice(-1);

        if (value.slice(12, 13) !== checkSum) {
          return message.defaultMessage;
        }

        return undefined;
      }

      return message.defaultMessage;
    },
);
