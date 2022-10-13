import { isDate } from '../isDate';

/**
 * @description утилита для сверки совпадения дат, или их отсутствия
 */
export const areDatesSame = (
  a: Date | null | undefined,
  b: Date | null | undefined,
) => (isDate(a) && isDate(b) && Number(a) === Number(b)) || a === b;
