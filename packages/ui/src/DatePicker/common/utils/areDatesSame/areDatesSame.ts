import { isDate } from '../isDate';

/**
 * @description хелпер для сверки одинаковости дат, или их отсутствия
 */
export const areDatesSame = (
  a: Date | null | undefined,
  b: Date | null | undefined,
) => (isDate(a) && isDate(b) && +a === +b) || a === b;
