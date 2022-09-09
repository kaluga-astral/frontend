import { AddHelper } from '../../types/addHelper';

export const addYears: AddHelper = (date, count) =>
  new Date(new Date(date).setUTCFullYear(date.getUTCFullYear() + count));
