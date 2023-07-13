import { buildIsoDate } from '../buildIsoDate';

/**
 * @description глубина сравнивания, даты могут быть равны по году, но разные по месяцу, и т.д.
 */
export enum DateCompareDeep {
  year,
  month,
  day,
  hour,
  minute,
  second,
}

export type IsDateOutOfRangeOptions = {
  /**
   * @description опорная дата, которая сравнивается с minDate и maxDate
   */
  date: Date;
  /**
   * @description глубина сравнивания, даты могут быть равны по году, но разные по месяцу, и т.д.
   */
  deep?: DateCompareDeep;
  dateA: Date;
  dateB: Date;
};

export const buildDateByDeep = (date: Date, deep: DateCompareDeep): Date =>
  buildIsoDate({
    year: date.getUTCFullYear(),
    month: deep > DateCompareDeep.year ? date.getUTCMonth() + 1 : undefined,
    day: deep > DateCompareDeep.month ? date.getUTCDate() : undefined,
    hour: deep > DateCompareDeep.day ? date.getUTCHours() : undefined,
    minute: deep > DateCompareDeep.hour ? date.getUTCMinutes() : undefined,
    second: deep > DateCompareDeep.minute ? date.getUTCSeconds() : undefined,
  });

/**
 * @description утилита занимающаяся числовым сравнением дат на НЕ вхождение даты в промежуток между А и B
 */
const checkDateOnOutOfRange = ({
  date,
  dateA,
  dateB,
}: Omit<IsDateOutOfRangeOptions, 'deep'>): boolean =>
  !((dateA >= date && date >= dateB) || (dateB >= date && date >= dateA));

/**
 * @description утилита проверки даты на НЕ вхождение в указанный диапазон между A и B, с учетом глубины сравнения
 */
export const isDateOutOfRange = ({
  date,
  dateA,
  dateB,
  deep = DateCompareDeep.second,
}: IsDateOutOfRangeOptions): boolean => {
  if (deep === DateCompareDeep.second) {
    return checkDateOnOutOfRange({ date, dateA, dateB });
  }

  return checkDateOnOutOfRange({
    date: buildDateByDeep(date, deep),
    dateA: buildDateByDeep(dateA, deep),
    dateB: buildDateByDeep(dateB, deep),
  });
};
