import { createRule } from '../createRule';
import { isEmptyString } from '../utils';

export const IS_INNUL_DEFAULT_MESSAGE = 'Некорректный ИНН ЮЛ';

const INNUL_LENGTH = 10;

const INN_UL_DECODING = [2, 4, 10, 3, 5, 9, 4, 6, 8];

const calcCheckSumForInnUl = (arrSymbols: string[]) =>
  (arrSymbols
    .slice(0, -1)
    .reduce(
      (sum, symbol, index) => INN_UL_DECODING[index] * Number(symbol) + sum,
      0,
    ) %
    11) %
  10;

/**
 * @description Проверяет валиден ли ИНН ЮЛ
 * @example isINNUL()('7728168971');
 */
export const isINNUL = createRule<{ message?: string }, false>(
  ({ message = IS_INNUL_DEFAULT_MESSAGE } = {}) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (typeof value === 'string') {
        if (value.length !== INNUL_LENGTH) {
          return message;
        }

        const arrSymbols = value.split('');

        if (arrSymbols.some((symbol) => isNaN(Number(symbol)))) {
          return message;
        }

        const checksum = calcCheckSumForInnUl(arrSymbols);

        if (Number(value[9]) !== checksum) {
          return message;
        }

        return undefined;
      }

      return message;
    },
);
