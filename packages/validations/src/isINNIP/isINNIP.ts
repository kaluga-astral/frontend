import { createRule } from '../createRule';

export const IS_INNIP_DEFAULT_MESSAGE = 'Некорректный ИНН ЮЛ';

const INNIP_LENGTH = 12;

/**
 * @description Проверяет валиден ли ИНН ИП
 * @example isINNIP()('384212952720');
 * @param {string} [value] проверяемое значение
 */
export const isINNIP = createRule(
  (message: string = IS_INNIP_DEFAULT_MESSAGE) =>
    (value) => {
      if (value === '') {
        return undefined;
      }

      if (typeof value === 'string') {
        if (value.length !== INNIP_LENGTH) {
          return message;
        }

        const arrSymbols = value.split('');

        if (arrSymbols.some((symbol) => isNaN(Number(symbol)))) {
          return message;
        }

        const firstChecksum =
          (arrSymbols
            .slice(0, -2)
            .reduce(
              (sum, symbol, index) =>
                [7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + sum,
              0,
            ) %
            11) %
          10;

        const secondChecksum =
          (arrSymbols
            .slice(0, -1)
            .reduce(
              (sum, symbol, index) =>
                [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) +
                sum,
              0,
            ) %
            11) %
          10;

        if (
          Number(value[10]) !== firstChecksum &&
          Number(value[11]) !== secondChecksum
        ) {
          return message;
        }

        return undefined;
      }

      return message;
    },
);
