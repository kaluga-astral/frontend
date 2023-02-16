import { createRule } from '../createRule';
import { isEmptyString, isStringOfZeros } from '../utils';

export const IS_KPP_DEFAULT_MESSAGE = 'Некорректный КПП';

export const KPP_REGEX = /^(\d{4}([A-Z]|\d){2}\d{3})$/;

export const isKPP = createRule<{ message?: string }, false>(
  ({ message = IS_KPP_DEFAULT_MESSAGE } = {}) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (isStringOfZeros(value)) {
        return message;
      }

      if (typeof value !== 'string') {
        return message;
      }

      if (!KPP_REGEX.test(value)) {
        return message;
      }

      return undefined;
    },
);
