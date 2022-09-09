import { AddHelper } from '../../types/addHelper';

/**
 * @description хелпер добавляющий к дате указанное колличество месяцев
 * @param {Date} date Дата к которой надо добавить месяцы
 * @param {number} count колличество месяцев которые надо отнять
 * @return {Date} Возвразщает новую дату с прибавленным колличеством месяцев
 */
export const addMonths: AddHelper = (date, count) =>
  new Date(new Date(date).setUTCMonth(date.getUTCMonth() + count));
