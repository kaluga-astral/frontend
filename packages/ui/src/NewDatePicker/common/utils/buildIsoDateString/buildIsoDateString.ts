import { zeroPad } from '../zeroPad';

/**
 * @description хелпер генерирующий строковую дату в формате ISO
 * @param {number} year  - год, обязательный
 * @param {number} month - месяц, опциональный
 * @param {number} day - день месяца, опциональный
 * @param {number} hour - час, опциональный
 * @param {number} minute - минута, опциональный
 */
export const buildIsoDateString = (
  year: number,
  month = 1,
  day = 1,
  hour = 0,
  minute = 0,
) =>
  `${zeroPad(year, 4)}-${zeroPad(month, 2)}-${zeroPad(day, 2)}T${zeroPad(
    hour,
    2,
  )}:${zeroPad(minute, 2)}:00.000Z`;
