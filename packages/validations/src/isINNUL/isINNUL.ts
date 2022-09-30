import { createRule } from '../createRule';

export const IS_INNUL_DEFAULT_MESSAGE = 'Некорректный ИНН ЮЛ';

const INNUL_LENGTH = 10;

export const isINNUL = createRule(
  (message: string = IS_INNUL_DEFAULT_MESSAGE) =>
    (value) => {
      if (value === '') {
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

        const checksum =
          (arrSymbols
            .slice(0, -1)
            .reduce(
              (sum, symbol, index) =>
                [2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + sum,
              0,
            ) %
            11) %
          10;

        if (Number(value[9]) !== checksum) {
          return message;
        }

        return undefined;
      }

      return message;
    },
);
