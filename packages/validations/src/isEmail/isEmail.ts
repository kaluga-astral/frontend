import { createRule } from '../createRule';
import { isEmptyString } from '../utils';

const EMAIL_REGEXP = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/;

export const EMAIL_MAX_LENGTH = 256;

export const DEFAULT_ERROR_MESSAGE = 'Некорректный E-mail';

export const INVALID_LENGTH_ERROR_MESSAGE = 'E-mail слишком длинный';

/**
 * @description Проверяет валиден ли email
 * @example isEmail()('test@example.com');
 */
export const isEmail = createRule<
  { message?: string; invalidLengthMessage?: string },
  false
>(
  ({
      message = DEFAULT_ERROR_MESSAGE,
      invalidLengthMessage = INVALID_LENGTH_ERROR_MESSAGE,
    } = {}) =>
    (value) => {
      if (typeof value !== 'string') {
        return message;
      }

      if (isEmptyString(value)) {
        return undefined;
      }

      if (!EMAIL_REGEXP.test(value)) {
        return message;
      }

      if (value.length > EMAIL_MAX_LENGTH) {
        return invalidLengthMessage;
      }

      return undefined;
    },
);
