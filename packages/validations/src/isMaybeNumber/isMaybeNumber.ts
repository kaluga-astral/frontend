import { createRule } from '../createRule';
import { CONTAINS_SPACES_REGEX } from '../constants';
import { isEmptyString } from '../utils';

export const IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE =
  'Не может быть преобразовано в число';

/**
 * @description Проверяет может ли значение быть преобразованным в число
 * @example isMaybeNumber()('7728168971');
 */
export const isMaybeNumber = createRule<{ message?: string }, false>(
  ({ message = IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE } = {}) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (
        typeof value === 'string' &&
        !isNaN(Number(value)) &&
        !CONTAINS_SPACES_REGEX.test(value) &&
        value !== ''
      ) {
        return undefined;
      }

      if (typeof value === 'number' && !isNaN(value)) {
        return undefined;
      }

      return message;
    },
);
