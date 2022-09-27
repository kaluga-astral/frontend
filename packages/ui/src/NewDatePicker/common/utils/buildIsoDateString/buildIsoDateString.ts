import { zeroPad } from '../zeroPad';

/**
 * @description опции для генерации даты в строковом формате
 * @param {number} year  - год, обязательный
 * @param {number} month - месяц, опциональный
 * @param {number} day - день месяца, опциональный
 * @param {number} hour - час, опциональный
 * @param {number} minute - минута, опциональный
 * @param {number} second - секунда, опциональный
 */
export type BuildIsoDateStringOptions = {
  year: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
};

/**
 * @description хелпер генерирующий строковую дату в формате ISO
 */
export const buildIsoDateString = ({
  year,
  month = 1,
  day = 1,
  hour = 0,
  minute = 0,
  second = 0,
}: BuildIsoDateStringOptions) =>
  `${zeroPad(year, 4)}-${zeroPad(month, 2)}-${zeroPad(day, 2)}T${zeroPad(
    hour,
    2,
  )}:${zeroPad(minute, 2)}:${zeroPad(second, 2)}.000Z`;
