import { isDate } from '../isDate';

export const areDatesSame = (
  a: Date | null | undefined,
  b?: Date | null | undefined,
) => (isDate(a) && isDate(b) && +a === +b) || a === b;
