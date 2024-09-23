import {
  type CalendarGridBuilder,
  type CalendarGridItem,
  type ProductionCalendar,
} from '../../../types';
import { buildIsoDate } from '../buildIsoDate';
import { DAYS_IN_WEEK } from '../../../constants';
import { addDays } from '../addDays';
import { isDate } from '../isDate';
import { compareDateDayByUTC } from '../compareDateDayByUTC';
import { DateCompareDeep, isDateOutOfRange } from '../isDateOutOfRange';
import { checkIsDateInRange } from '../checkIsDateInRange';

export type CalendarGridItemDay = {
  /**
   * Флаг обозначающий, что дата не попадает в предполагаемый диапазон к выбору,
   * но эту дату все равно можно выбрать, например календарь на декабрь 22го года, начинается с понедельника 28го ноября,
   * и вот этот кусочек ноября будет вне целевого диапазона
   */
  isOutOfAvailableRange: boolean;
  /**
   * Флаг, обозначающий что дата не попадает в ховер диапазон
   */
  isInHoveredRange: boolean;
  /**
   * день месяца, 1 - 31
   */
  monthDay: number;
  /**
   * Порядковый номер в общем массиве
   */
  index: number;
} & Partial<ProductionCalendar.Day>;

type BuildDaysCalendarGridOptions = {
  /**
   * Флаг обозначающий, что надо отрендерить массив, где понедельник в календаре идет вначале
   * @default true
   */
  isMondayFirst?: boolean;
  /**
   * Дата, которая находится в состоянии hover
   */
  hoveredDate?: Date | null;
  /**
   * Минимальная дата. Для дат меньше или равной этой isDisabled будет равен true
   */
  minDate?: Date | null;
  /**
   * Максимальная. Для дат больше или равной этой isDisabled будет равен true
   */
  maxDate?: Date | null;
  /**
   * Хранилище данных по датам производственного календаря
   */
  productionCalendarStorage?: ProductionCalendar.Storage | null;
};

const FULL_ROWS_COUNT = 6;

export const DAYS_CALENDAR_ITEMS_COUNT = FULL_ROWS_COUNT * DAYS_IN_WEEK;

export const buildDaysCalendarGrid: CalendarGridBuilder<
  CalendarGridItemDay,
  BuildDaysCalendarGridOptions
> = ({
  minDate,
  maxDate,
  selectedDate,
  selectedRanges,
  hoveredDate,
  baseDate,
  isMondayFirst = true,
  productionCalendarStorage,
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

  return Array.from({ length: DAYS_CALENDAR_ITEMS_COUNT }).map<
    CalendarGridItem<CalendarGridItemDay>
  >((_, index) => {
    // текущая дата в счетчике
    const date = addDays(startDate, index - startWeekDay + firstWeekDayGap);
    /**
     * нормализованный номер месяца
     */
    const dateMonth = date.getUTCMonth() + 1;

    const productionCalendarDay = productionCalendarStorage?.get(
      date.toISOString(),
    );

    const hasBothEdgeDates = Boolean(minDate && maxDate);

    const isDisabled =
      (hasBothEdgeDates &&
        isDateOutOfRange({
          date,
          dateA: minDate!,
          dateB: maxDate!,
          deep: DateCompareDeep.day,
        })) ||
      (Boolean(minDate) && date < minDate!) ||
      (Boolean(maxDate) && date > maxDate!);

    return {
      ...productionCalendarDay,
      isOutOfAvailableRange: dateMonth !== month,
      index,
      isSelected:
        ((isDate(selectedDate) && compareDateDayByUTC(selectedDate, date)) ||
          selectedRanges?.some(
            ({ dateA, dateB }) =>
              compareDateDayByUTC(dateA, date) ||
              compareDateDayByUTC(dateB, date),
          )) ??
        false,
      isCurrentInUserLocalTime:
        date.getUTCFullYear() === currentDate.getFullYear() &&
        date.getUTCDate() === currentDate.getDate() &&
        date.getUTCMonth() === currentDate.getMonth(),
      date,
      isInSelectedRange:
        selectedRanges?.some(({ dateA, dateB }) =>
          checkIsDateInRange({
            date,
            dateA,
            dateB,
            deep: DateCompareDeep.day,
          }),
        ) ?? false,
      isInHoveredRange: checkIsDateInRange({
        date,
        dateA: selectedDate,
        dateB: hoveredDate,
        deep: DateCompareDeep.day,
      }),
      monthDay: date.getUTCDate(),
      isDisabled,
    };
  });
};
