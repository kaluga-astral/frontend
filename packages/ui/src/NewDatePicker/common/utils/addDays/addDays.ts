import { AddHelper } from '../../types/addHelper';

export const addDays: AddHelper = (date, count) =>
  new Date(new Date(date).setUTCDate(date.getUTCDate() + count));
