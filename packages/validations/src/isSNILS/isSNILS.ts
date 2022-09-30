import { createRule } from '../createRule';

export const IS_SNILS_DEFAULT_MESSAGE = 'Некорректный СНИЛС';

const RESTRICTED_VALUES = ['00000000000'];
const DEFAULT_CHECKED_SUM = [0, 100, 101];

export const removeSpecialCharacters = (value: string) => {
  return value.replace(/\D/g, '');
};

export const calcCheckSumForSNILS = (digitsOfValue: string) =>
  digitsOfValue
    .slice(0, 9)
    .split('')
    .map(Number)
    .reduce((sum, currentValue, index) => sum + currentValue * (9 - index), 0);

export const isSNILS = createRule(
  (message: string = IS_SNILS_DEFAULT_MESSAGE) =>
    (value) => {
      if (value === '') {
        return undefined;
      }

      if (typeof value !== 'string') {
        return IS_SNILS_DEFAULT_MESSAGE;
      }

      const formattedValue = removeSpecialCharacters(value);

      if (formattedValue.length !== value.length) {
        return IS_SNILS_DEFAULT_MESSAGE;
      }

      if (!/^(\d{11})$/.test(formattedValue)) {
        return message;
      }

      if (RESTRICTED_VALUES.includes(formattedValue)) {
        return message;
      }

      const checkSum = Number(formattedValue.slice(9, 11));
      const calculatedCheckSum = calcCheckSumForSNILS(formattedValue);

      if (calculatedCheckSum < DEFAULT_CHECKED_SUM[1]) {
        if (calculatedCheckSum === checkSum) {
          return undefined;
        }

        return message;
      }

      if (
        calculatedCheckSum === DEFAULT_CHECKED_SUM[1] ||
        calculatedCheckSum === DEFAULT_CHECKED_SUM[2]
      ) {
        if (checkSum === DEFAULT_CHECKED_SUM[0]) {
          return undefined;
        }

        return message;
      }

      if (calculatedCheckSum > DEFAULT_CHECKED_SUM[2]) {
        if (
          calculatedCheckSum % DEFAULT_CHECKED_SUM[2] === checkSum ||
          (calculatedCheckSum % DEFAULT_CHECKED_SUM[2] ===
            DEFAULT_CHECKED_SUM[1] &&
            checkSum === DEFAULT_CHECKED_SUM[0])
        ) {
          return undefined;
        }

        return message;
      }

      return undefined;
    },
);
