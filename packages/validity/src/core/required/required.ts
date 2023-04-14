import { createError } from '../createError';
import { createRule } from '../createRule';
import { REQUIRED_ERROR_INFO } from '../errors';

/**
 * @description Правило для проверки значение на required
 */
export const required = createRule<unknown, { message?: string }, false>(
  ({ message } = {}) =>
    (value) => {
      if (!value) {
        return createError({
          ...REQUIRED_ERROR_INFO,
          message: message || REQUIRED_ERROR_INFO.message,
        });
      }

      return undefined;
    },
);
