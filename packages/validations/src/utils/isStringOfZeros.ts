/**
 * @description Используется для проверки того, состоит ли строка целиком из 0
 */
export const isStringOfZeros = (value: unknown) => {
  if (value && typeof value === 'string') {
    return !Boolean(value.replaceAll('0', ''));
  }

  return false;
};
