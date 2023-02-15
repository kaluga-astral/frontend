import { useContext, useMemo } from 'react';

import { DAYS_IN_WEEK, MONTHS_IN_YEAR } from '../../../constants/counts';
import {
  DateCompareDeep,
  addDays,
  buildIsoDate,
  isDate,
  isDateOutOfRange,
} from '../../../../utils/date';
import { GridBuilder, GridItem } from '../../../types';
import { buildGridResult } from '../../../utils/buildGridItem';
import { MinMaxDateContext } from '../../../MinMaxDateContext';
import { compareDateDayByUTC } from '../../../utils/compareDateDayByUTC';

export type DayItem = {
  /**
   * @description Флаг обозначающий, что дата совпадает с запрошенным месяцем
   */
  isOutOfAvailableRange: boolean;
  /**
   * @description день месяца, 1 - 31
   */
  monthDay: number;
};

type BuildMonthGridOptions = {
  /**
   * @description для сборки календаря в полный размер, для соответствия с дизайном в rangePicker
   * @default false
   */
  fullSize?: boolean;
  /**
   * @description Флаг обозначающий, что надо отрендерить массив, где понедельник в календаре идет вначале
   * @default true
   */
  isMondayFirst?: boolean;
};

const MAX_ROWS = 6;
const MAX_DAYS_IN_GRID = MAX_ROWS * DAYS_IN_WEEK;

export const useDaysGrid: GridBuilder<DayItem, BuildMonthGridOptions> = ({
  baseDate,
  selectedDate,
  fullSize = false,
  isMondayFirst = true,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);

  return useMemo(() => {
    const grid: GridItem<DayItem>[] = [];

    /**
     * @description нормализованный номер месяца от базовой даты
     */
    const month = baseDate.getUTCMonth() + 1;

    /**
     * @description получаем новую дату, т.к. пропс может содержать дни, часы, минуты, что собьет наш счет
     */
    const startDate = buildIsoDate({ year: baseDate.getUTCFullYear(), month });

    /**
     * @description отступ для компенсации первого дня недели, 1 для понедельника, 0 для воскресенья
     */
    const firstWeekDayGap = Number(isMondayFirst);

    /**
     * @description номер первого дня текущего месяца в календаре, зависит от флага isMondayFirst
     */
    let startWeekDay = startDate.getUTCDay();

    if (startWeekDay === 0 && isMondayFirst) {
      startWeekDay = DAYS_IN_WEEK;
    }

    /**
     * @description счетчик указывающий на первый индекс текущего месяца
     */
    let startMonthIndex = 0;

    /**
     * @description счетчик указывающий на последний индекс текущего месяца
     */
    let lastCurrentMonthIndex = -1;

    /**
     * @description текущая дата пользователя
     */
    const currentDate = new Date();

    // считчик начинается с отступа, чтобы соответствовать выбранному типу календаря (первый понедельник/воскресенье)
    for (let i = firstWeekDayGap; i < MAX_DAYS_IN_GRID + firstWeekDayGap; i++) {
      // текущая дата в счетчике
      const date = addDays(startDate, i - startWeekDay);
      /**
       * @description нормализованный номер месяца
       */
      const dateMonth = date.getUTCMonth() + 1;
      /**
       * @description флаг следующего месяца относительно базовой даты
       */
      const isNextMonth =
        //если текущий месяц декабрь(12), то следующим для него будет январь(1)
        (dateMonth !== MONTHS_IN_YEAR && dateMonth > month) ||
        (month === MONTHS_IN_YEAR && dateMonth === 1);

      /**
       * @description флаг предыдущего месяца относительно базовой даты
       */
      const isPrevMonth =
        // если текущий месяц январь(1), то предыдущим для него является декабрь(12)
        dateMonth < month || (dateMonth === MONTHS_IN_YEAR && month === 1);
      const isFirstDayOfWeek = date.getUTCDay() === firstWeekDayGap;

      // проверка на необходимость продолжать заполнять массив
      // если fullSize === false, и начался следующий месяц, и день недели понедельник, то тогда закончить заполнение
      if (!fullSize && isNextMonth && isFirstDayOfWeek) {
        break;
      }

      if (!isNextMonth) {
        // если месяц еще не следующий, то инкрементируем счетчик крайнего дня месяца
        lastCurrentMonthIndex++;
      }

      if (isPrevMonth) {
        // если месяц предыдущий, инкрементируем счетчик первого дня месяца
        startMonthIndex++;
      }

      grid.push({
        isOutOfAvailableRange: dateMonth !== month,
        selected:
          isDate(selectedDate) && compareDateDayByUTC(selectedDate, date),
        isCurrent:
          date.getUTCFullYear() === currentDate.getFullYear() &&
          date.getUTCDate() === currentDate.getDate() &&
          date.getUTCMonth() === currentDate.getMonth(),
        date,
        monthDay: date.getUTCDate(),
        disabled: isDateOutOfRange({
          date,
          minDate,
          maxDate,
          deep: DateCompareDeep.day,
        }),
      });
    }

    return buildGridResult<DayItem>({
      grid,
      minDate,
      maxDate,
      addCb: addDays,
      indexPrevDisabledCheck: startMonthIndex,
      indexNextDisabledCheck: lastCurrentMonthIndex,
      deep: DateCompareDeep.day,
    });
  }, [baseDate, selectedDate]);
};
