import { INCORRECT_MESSAGE } from '../constants';
import { createRule } from '../createRule';
import { isMaybeNumber } from '../isMaybeNumber';
import { isEmptyString } from '../utils';

export const getDefaultMessage = (min: number) => {
  return `Должно быть больше чем ${min}`;
};

/**
 * @description Проверяет минимальное значение value
 * @example isMinValue({ min: 10 })(1239123);
 * @param {number} [min] Минимальное значение value
 * @param {string} [message.defaultMessage] Сообщение при неудачной валидации
 * @param {string} [message.incorrectValue] Сообщение при переданном некорректном value
 */
export const isMinValue = createRule<
  {
    min: number;
    message?: {
      defaultMessage?: string;
      incorrectValue?: string;
    };
  },
  true
>(
  (
      {
        min,
        message = {
          defaultMessage: `Должно быть больше чем ${min}`,
          incorrectValue: INCORRECT_MESSAGE,
        },
      } = { min: 0 },
    ) =>
    (value) => {
      if (isEmptyString(value)) {
        return undefined;
      }

      if (typeof value === 'string' && !isMaybeNumber()(value)) {
        if (parseFloat(value) >= min) {
          return undefined;
        }

        return message.defaultMessage;
      }

      if (typeof value !== 'number' || isNaN(value)) {
        return message.incorrectValue;
      }

      if (value >= min) {
        return undefined;
      }

      return message.defaultMessage;
    },
);
