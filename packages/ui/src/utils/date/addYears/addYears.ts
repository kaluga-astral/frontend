import dayjs from 'dayjs';

/**
 * @description утилита добавляющая к дате указанное количество лет
 * @param {Date} date Дата к которой надо добавить года
 * @param {number} count количество лет которые надо прибавить (при отрицательном значении отнять)
 * @return {Date} Возвращает новую дату с прибавленным количеством лет
 */
export const addYears = (date: Date, count: number) =>
  dayjs(date).add(count, 'y').toDate();
