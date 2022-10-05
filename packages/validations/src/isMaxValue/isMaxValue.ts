import { INCORRECT_MESSAGE } from '../constants';
import { createRule } from '../createRule';
import { isMaybeNumber } from '../isMaybeNumber';
import { isEmptyString } from '../utils';

export const getDefaultMessage = (max: number) => {
  return `Должно быть меньше чем ${max}`;
};

/**
 * @description Проверяет максимальное значение value
 * @example isMaxValue({ max: 10 })(1239123);
 * @param {number} [max] Максимальное значение value
 * @param {string} [message.defaultMessage] Сообщение при неудачной валидации
 * @param {string} [message.incorrectValue] Сообщение при переданном некорректном value
 */
export const isMaxValue = createRule<
  {
    message?: {
      defaultMessage?: string;
      incorrectValue?: string;
    };
    max: number;
  },
  true
>(
  ({
      max,
      message = {
        defaultMessage: `Должно быть меньше чем ${max}`,
        incorrectValue: INCORRECT_MESSAGE,
      },
    }) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (typeof value === 'string' && !isMaybeNumber()(value)) {
        if (parseFloat(value) <= max) {
          return undefined;
        }

        return message.defaultMessage;
      }

      if (typeof value !== 'number' || isNaN(value)) {
        return message.incorrectValue;
      }

      if (value <= max) {
        return undefined;
      }

      return message.defaultMessage;
    },
);
