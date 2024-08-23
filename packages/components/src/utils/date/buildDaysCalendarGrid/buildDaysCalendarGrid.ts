import type { CalendarGridBuilder, CalendarGridItem } from '../../../types';
import { buildIsoDate } from '../buildIsoDate';
import { DAYS_IN_WEEK } from '../constants';
import { addDays } from '../addDays';
import { isDate } from '../isDate';
import { compareDateDayByUTC } from '../compareDateDayByUTC';
import { DateCompareDeep, isDateOutOfRange } from '../isDateOutOfRange';
import { checkIsDateBetweenSelectedAndRangeDates } from '../checkIsDateBetweenSelectedAndRangeDates';

export type DayItem = {
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

const MAX_ROWS = 6;
const MAX_DAYS_IN_GRID = MAX_ROWS * DAYS_IN_WEEK;

export const buildDaysCalendarGrid: CalendarGridBuilder<
  DayItem,
  BuildMonthGridOptions
> = ({
  minDate,
  maxDate,
  selectedDate,
  rangeDate,
  baseDate,
  isMondayFirst = true,
}) => {
  const grid: CalendarGridItem<DayItem>[] = [];

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

  // считчик начинается с отступа, чтобы соответствовать выбранному типу календаря (первый понедельник/воскресенье)
  for (let i = firstWeekDayGap; i < MAX_DAYS_IN_GRID + firstWeekDayGap; i++) {
    // текущая дата в счетчике
    const date = addDays(startDate, i - startWeekDay);
    /**
     * нормализованный номер месяца
     */
    const dateMonth = date.getUTCMonth() + 1;
    /**
     * флаг следующего месяца относительно базовой даты
     */

    grid.push({
      isOutOfAvailableRange: dateMonth !== month,
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
    });
  }

  return { grid };
};
