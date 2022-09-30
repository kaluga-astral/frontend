import { createRule } from '../createRule';

export const IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE =
  'Не может быть преобразовано в число';

/**
 * @description Проверяет может ли значение быть преобразованным в число
 * @example isMaybeNumber()('7728168971');
 * @param {string} [value] проверяемое значение
 */
export const isMaybeNumber = createRule(
  (message: string = IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE) =>
    (value) => {
      if (value === '') {
        return undefined;
      }

      if (
        typeof value === 'string' &&
        !isNaN(Number(value)) &&
        !/\s/g.test(value) &&
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
