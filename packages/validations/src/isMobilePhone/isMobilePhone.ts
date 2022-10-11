import { createRule } from '../createRule';
import { isEmptyString } from '../utils';

export const IS_MOBILE_PHONE_DEFAULT_MESSAGE = 'Некорректный номер телефона';

const MOBILE_PHONE_REGEX = /^(79)\d{9}$/;

/**
 * @description Проверяет валиден ли мобильный телефон
 * @example isMobilePhone()('79999999999');
 */
export const isMobilePhone = createRule<{ message?: string }, false>(
  ({ message = IS_MOBILE_PHONE_DEFAULT_MESSAGE } = {}) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (typeof value === 'string') {
        if (!MOBILE_PHONE_REGEX.test(value)) {
          return message;
        }

        return undefined;
      }

      return message;
    },
);
