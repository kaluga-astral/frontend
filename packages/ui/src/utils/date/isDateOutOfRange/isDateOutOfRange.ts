import { isDate } from '../isDate';
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
  log?: boolean;
  minDate?: Date;
  maxDate?: Date;
};

export const buildDateByDeep = (date: Date, deep: DateCompareDeep): Date =>
  buildIsoDate({
    year: date.getUTCFullYear(),
    month: deep > DateCompareDeep.year ? date.getUTCMonth() + 1 : undefined,
    day: deep > DateCompareDeep.month ? date.getUTCDate() : undefined,
    hour: deep > DateCompareDeep.day ? date.getUTCDate() : undefined,
    minute: deep > DateCompareDeep.hour ? date.getUTCDate() : undefined,
    second: deep > DateCompareDeep.minute ? date.getUTCDate() : undefined,
  });

/**
 * @description утилита проверки даты на вхождение в указанный диапазон между minDate и maxDate
 */
export const isDateOutOfRange = ({
  date,
  minDate,
  maxDate,
  deep = DateCompareDeep.second,
}: IsDateOutOfRangeOptions): boolean => {
  const hasMinDate = isDate(minDate);
  const hasMaxDate = isDate(maxDate);

  if (deep === DateCompareDeep.second) {
    return (
      (hasMinDate && Number(date) < Number(minDate)) ||
      (hasMaxDate && Number(date) > Number(maxDate))
    );
  } else {
    const dateToCompare = buildDateByDeep(date, deep);

    return (
      (hasMinDate &&
        Number(dateToCompare) < Number(buildDateByDeep(minDate, deep))) ||
      (hasMaxDate &&
        Number(dateToCompare) > Number(buildDateByDeep(maxDate, deep)))
    );
  }
};
