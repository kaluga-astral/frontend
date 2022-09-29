import { createRule } from '../createRule';

export const IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE =
  'Не может быть преобразовано в число';

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
