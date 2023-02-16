import { createRule } from '../createRule';
import { isEmptyString, isStringOfZeros } from '../utils';

export const IS_INNIP_DEFAULT_MESSAGE = 'Некорректный ИНН ИП';

const INNIP_LENGTH = 12;

const FIRST_INN_UL_DECODING = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
const SECOND_INN_UL_DECODING = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

const calcFirstCheckSumForInnUl = (arrSymbols: string[]) =>
  (arrSymbols
    .slice(0, -2)
    .reduce(
      (sum, symbol, index) =>
        FIRST_INN_UL_DECODING[index] * Number(symbol) + sum,
      0,
    ) %
    11) %
  10;

const calcSecondCheckSumForInnUl = (arrSymbols: string[]) =>
  (arrSymbols
    .slice(0, -1)
    .reduce(
      (sum, symbol, index) =>
        SECOND_INN_UL_DECODING[index] * Number(symbol) + sum,
      0,
    ) %
    11) %
  10;

/**
 * @description Проверяет валиден ли ИНН ИП
 * @example isINNIP()('384212952720');
 */
export const isINNIP = createRule<{ message?: string }, false>(
  ({ message = IS_INNIP_DEFAULT_MESSAGE } = {}) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (isStringOfZeros(value)) {
        return message;
      }

      if (typeof value === 'string') {
        if (value.length !== INNIP_LENGTH) {
          return message;
        }

        const arrSymbols = value.split('');

        const firstChecksum = calcFirstCheckSumForInnUl(arrSymbols);

        const secondChecksum = calcSecondCheckSumForInnUl(arrSymbols);

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
