import { createRule } from '../createRule';

export const IS_OGRNUL_DEFAULT_MESSAGE = 'Некорректный ОГРН';

const OGRNUL_LENGTH = 13;

export const isOGRNUL = createRule(
  (message: string = IS_OGRNUL_DEFAULT_MESSAGE) =>
    (value) => {
      if (value === '') {
        return undefined;
      }

      if (typeof value === 'string') {
        const isOGRNLengthValid = value.length === OGRNUL_LENGTH;
        const isOGRNCheckNumValid =
          value.slice(-1) !== `${parseInt(value.slice(0, -1)) % 11}`.slice(-1);

        if (!/^(\d{13})$/.test(value)) {
          return message;
        }

        if (value && isOGRNLengthValid && isOGRNCheckNumValid) {
          return message;
        }

        return undefined;
      }

      return message;
    },
);
