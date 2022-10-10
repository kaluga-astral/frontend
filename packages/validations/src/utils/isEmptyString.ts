/**
 * @description Используется в правилах валидации для проверки того, что проверяемое значение еще не указано
 */
export const isEmptyString = (value: unknown) => {
  return value === '';
};
