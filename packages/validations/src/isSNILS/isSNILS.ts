import { createRule } from '../createRule';
import { isEmptyString, isStringOfZeros } from '../utils';

export const IS_SNILS_DEFAULT_MESSAGE = 'Некорректный СНИЛС';

const RESTRICTED_VALUES = ['00000000000'];
const DEFAULT_CHECKED_SUM = [0, 100, 101];

const removeSpecialCharacters = (value: string) => {
  return value.replace(/\D/g, '');
};

const calcCheckSumForSNILS = (digitsOfValue: string) =>
  digitsOfValue
    .slice(0, 9)
    .split('')
    .map(Number)
    .reduce((sum, currentValue, index) => sum + currentValue * (9 - index), 0);

const compareCheckSum = (calculatedCheckSum: number, checkSum: number) => {
  return (
    calculatedCheckSum % DEFAULT_CHECKED_SUM[2] === checkSum ||
    (calculatedCheckSum % DEFAULT_CHECKED_SUM[2] === DEFAULT_CHECKED_SUM[1] &&
      checkSum === DEFAULT_CHECKED_SUM[0])
  );
};

/**
 * @description Проверяет валиден ли СНИЛС
 * @example isSNILS()('95145370513');
 */
export const isSNILS = createRule<{ message?: string }, false>(
  ({ message = IS_SNILS_DEFAULT_MESSAGE } = {}) =>
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

      const formattedValue = removeSpecialCharacters(value);

      if (formattedValue.length !== value.length) {
        return message;
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
        if (compareCheckSum(calculatedCheckSum, checkSum)) {
          return undefined;
        }

        return message;
      }

      return undefined;
    },
);
