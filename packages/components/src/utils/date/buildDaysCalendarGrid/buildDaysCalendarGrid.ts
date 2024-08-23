import type { CalendarGridBuilder, CalendarGridItem } from '../../../types';
import { buildIsoDate } from '../buildIsoDate';
import { DAYS_IN_WEEK } from '../constants';
import { addDays } from '../addDays';
import { isDate } from '../isDate';
import { compareDateDayByUTC } from '../compareDateDayByUTC';
import { DateCompareDeep, isDateOutOfRange } from '../isDateOutOfRange';
import { checkIsDateBetweenSelectedAndRangeDates } from '../checkIsDateBetweenSelectedAndRangeDates';

export type CalendarGridItemDay = {
  /**
   * Флаг обозначающий, что дата не попадает в предполагаемый диапазон к выбору,
   * но эту дату все равно можно выбрать, например календарь на декабрь 22го года, начинается с понедельника 28го ноября,
   * и вот этот кусочек ноября будет вне целевого диапазона
   */
  isOutOfAvailableRange: boolean;
  /**
   * день месяца, 1 - 31
   */
  monthDay: number;
  index: number;
};

type BuildMonthGridOptions = {
  /**
   * Флаг обозначающий, что надо отрендерить массив, где понедельник в календаре идет вначале
   * @default true
   */
  isMondayFirst?: boolean;
  minDate: Date;
  maxDate: Date;
};

const FULL_ROWS_COUNT = 6;
const FULL_DAYS_COUNT = FULL_ROWS_COUNT * DAYS_IN_WEEK;

export const buildDaysCalendarGrid: CalendarGridBuilder<
  CalendarGridItemDay,
  BuildMonthGridOptions
> = ({
  minDate,
  maxDate,
  selectedDate,
  rangeDate,
  baseDate,
  isMondayFirst = true,
}) => {
  /**
   * нормализованный номер месяца от базовой даты
   */
  const month = baseDate.getUTCMonth() + 1;

  /**
   * получаем новую дату, т.к. пропс может содержать дни, часы, минуты, что собьет наш счет
   */
  const startDate = buildIsoDate({ year: baseDate.getUTCFullYear(), month });

  /**
   * отступ для компенсации первого дня недели, 1 для понедельника, 0 для воскресенья
   */
  const firstWeekDayGap = Number(isMondayFirst);

  /**
   * номер первого дня текущего месяца в календаре, зависит от флага isMondayFirst
   */
  let startWeekDay = startDate.getUTCDay();

  if (startWeekDay === 0 && isMondayFirst) {
    startWeekDay = DAYS_IN_WEEK;
  }

  /**
   * текущая дата пользователя
   */
  const currentDate = new Date();

  return Array.from({ length: FULL_DAYS_COUNT }).map<
    CalendarGridItem<CalendarGridItemDay>
  >((_, index) => {
    // текущая дата в счетчике
    const date = addDays(startDate, index - startWeekDay + firstWeekDayGap);
    /**
     * нормализованный номер месяца
     */
    const dateMonth = date.getUTCMonth() + 1;
    /**
     * флаг следующего месяца относительно базовой даты
     */

    return {
      isOutOfAvailableRange: dateMonth !== month,
      index,
      selected:
        (isDate(selectedDate) && compareDateDayByUTC(selectedDate, date)) ||
        (isDate(rangeDate) && compareDateDayByUTC(rangeDate, date)),
      isCurrentInUserLocalTime:
        date.getUTCFullYear() === currentDate.getFullYear() &&
        date.getUTCDate() === currentDate.getDate() &&
        date.getUTCMonth() === currentDate.getMonth(),
      date,
      isInSelectedRange: checkIsDateBetweenSelectedAndRangeDates({
        date,
        selectedDate,
        rangeDate,
        deep: DateCompareDeep.day,
      }),
      monthDay: date.getUTCDate(),
      disabled: isDateOutOfRange({
        date,
        dateA: minDate,
        dateB: maxDate,
        deep: DateCompareDeep.day,
      }),
    };
  });
};
