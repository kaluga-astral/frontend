import { createRule } from '../createRule';

export const IS_OGRNIP_DEFAULT_MESSAGE = 'Некорректный ОГРН ИП';

const OGRNIP_LENGTH = 15;

/**
 * @description Проверяет валиден ли ОРГН ИП
 * @example isOGRNIP()('7728168971');
 * @param {string} [value] проверяемое значение
 */
export const isOGRNIP = createRule<{ message?: string }, false>(
  ({ message = IS_OGRNIP_DEFAULT_MESSAGE } = {}) =>
    (value) => {
      if (typeof value === 'string') {
        if (value.length !== OGRNIP_LENGTH) {
          return message;
        }

        const checkSum = (parseInt(value.slice(0, -1)) % 13)
          .toString()
          .slice(-1);

        if (value.slice(14, 15) !== checkSum) {
          return message;
        }

        return undefined;
      }

      return message;
    },
);
