import { useContext, useMemo } from 'react';

import { DAYS_IN_WEEK } from '../../../constants';
import {
  DateCompareDeep,
  addDays,
  buildIsoDate,
  isDate,
  isDateOutOfRange,
} from '../../../../utils/date';
import { type GridBuilder, type GridItem } from '../../../types';
import {
  buildGridResult,
  compareDateDayByUTC,
  isDateBetweenSelectedAndRangeDates,
} from '../../../utils';
import { MinMaxDateContext } from '../../../MinMaxDateContext';

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
   * для сборки календаря в полный размер, для соответствия с дизайном в rangePicker
   * @default false
   */
  fullSize?: boolean;
  /**
   * Флаг обозначающий, что надо отрендерить массив, где понедельник в календаре идет вначале
   * @default true
   */
  isMondayFirst?: boolean;
};

const MAX_ROWS = 6;
const MAX_DAYS_IN_GRID = MAX_ROWS * DAYS_IN_WEEK;

export const useDaysGrid: GridBuilder<DayItem, BuildMonthGridOptions> = ({
  baseDate,
  selectedDate,
  rangeDate,
  isMondayFirst = true,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);

  return useMemo(() => {
    const grid: GridItem<DayItem>[] = [];

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
        isInSelectedRange: isDateBetweenSelectedAndRangeDates({
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

    return buildGridResult<DayItem>({
      grid,
      dateA: minDate,
      dateB: maxDate,
      deep: DateCompareDeep.day,
    });
  }, [baseDate, selectedDate, maxDate, minDate, rangeDate]);
};
