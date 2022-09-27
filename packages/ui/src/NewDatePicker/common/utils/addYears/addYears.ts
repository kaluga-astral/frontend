import { AddHelper } from '../../types/addHelper';

/**
 * @description хелпер добавляющий к дате указанное количество лет
 * @param {Date} date Дата к которой надо добавить года
 * @param {number} count количество лет которые надо прибавить (при отрицательном значении отнять)
 * @return {Date} Возвращает новую дату с прибавленным количеством лет
 */
export const addYears: AddHelper = (date, count) =>
  new Date(new Date(date).setUTCFullYear(date.getUTCFullYear() + count));
