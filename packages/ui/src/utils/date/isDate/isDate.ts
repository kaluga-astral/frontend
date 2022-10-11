import { isDate as fnsIsDate } from 'date-fns';

/**
 * @description функция проверки значения на дату
 */
export const isDate = (value: unknown): value is Date =>
  fnsIsDate(value) && !isNaN(Number(value));
