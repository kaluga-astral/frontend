/**
 * @description утилита для сравнения двух дат на совпадение дня,
 * пример применения DayPicker, для сравнения выбранной даты и каждой даты в пикере
 */
export const compareDateDayByUTC = (dateA: Date, dateB: Date) =>
  dateA.getUTCFullYear() === dateB.getUTCFullYear() &&
  dateA.getUTCMonth() === dateB.getUTCMonth() &&
  dateA.getUTCDate() === dateB.getUTCDate();
