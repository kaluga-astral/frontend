import { AddHelper } from '../../types/addHelper';

/**
 * @description хелпер добавляющий к дате указанное количество месяцев
 * @param {Date} date Дата к которой надо добавить месяцы
 * @param {number} count количество месяцев которые надо прибавить (при отрицательном значении отнять)
 * @return {Date} Возвращает новую дату с прибавленным количеством месяцев
 */
export const addMonths: AddHelper = (date, count) =>
  new Date(new Date(date).setUTCMonth(date.getUTCMonth() + count));
