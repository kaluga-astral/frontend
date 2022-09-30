import { createRule } from '../createRule';

export const IS_OGRNIP_DEFAULT_MESSAGE = 'Некорректный ОГРНИП';

const OGRNUL_LENGTH = 13;

export const isOGRNIP = createRule(
  (message: string = IS_OGRNIP_DEFAULT_MESSAGE) =>
    (value) => {
      if (typeof value === 'string') {
        const isOGRNLengthValid = value.length === OGRNUL_LENGTH;
        const isOGRNCheckNumValid =
          value.slice(-1) !== `${parseInt(value.slice(0, -1)) % 13}`.slice(-1);

        if (!/^(\d{15})$/.test(value)) {
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
