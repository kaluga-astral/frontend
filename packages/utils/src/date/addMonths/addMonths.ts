import dayjs from 'dayjs';

/**
 * @description утилита добавляющая к дате указанное количество месяцев
 * @param {Date} date Дата к которой надо добавить месяцы
 * @param {number} count количество месяцев которые надо прибавить (при отрицательном значении отнять)
 * @return {Date} Возвращает новую дату с прибавленным количеством месяцев
 */
export const addMonths = (date: Date, count: number) =>
  dayjs(date).add(count, 'M').toDate();
