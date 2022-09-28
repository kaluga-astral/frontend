import { createRule } from '../createRule';

const OGRNUL_LENGTH = 13;

export const isOGRNUL = createRule(
  (message: string = 'Error') =>
    (value: unknown): string | undefined => {
      if (typeof value === 'string') {
        const isOGRNLengthValid = value.length === OGRNUL_LENGTH;
        const isOGRNCheckNumValid =
          value.slice(-1) !== `${parseInt(value.slice(0, -1)) % 11}`.slice(-1);

        if (!/^(\d{13})$/.test(value)) {
          return 'Error';
        }

        if (value && isOGRNLengthValid && isOGRNCheckNumValid) {
          return message;
        }

        return undefined;
      }

      return undefined;
    },
);
