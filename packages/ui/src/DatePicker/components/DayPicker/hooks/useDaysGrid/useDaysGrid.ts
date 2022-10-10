import { useContext, useMemo } from 'react';

import { DAYS_IN_WEEK, MONTHS_IN_YEAR } from '../../../../constants/counts';
import { addDays } from '../../../../../utils/addDays';
import { GridBuilder, GridItem } from '../../../../types';
import {
  DateCompareDeep,
  isDateOutOfRange,
} from '../../../../../utils/isDateOutOfRange';
import { buildGridResult } from '../../../../utils/buildGridItem';
import { MinMaxDateContext } from '../../../MinMaxDateContext';
import { buildIsoDate } from '../../../../../utils/buildIsoDate';

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
    const month = baseDate.getUTCMonth() + 1;
    const startDate = buildIsoDate({ year: baseDate.getUTCFullYear(), month });

    const firstWeekDayGap = +isMondayFirst;

    let startWeekDay = startDate.getUTCDay();

    if (startWeekDay === 0 && isMondayFirst) {
      startWeekDay = DAYS_IN_WEEK;
    }

    let startMonthIndex = 0;
    let lastCurrentMonthIndex = -1;

    const currentDate = new Date();

    for (let i = firstWeekDayGap; i < MAX_DAYS_IN_GRID + firstWeekDayGap; i++) {
      const date = addDays(startDate, i - startWeekDay);
      const dateMonth = date.getUTCMonth() + 1;
      const isNextMonth =
        (dateMonth !== MONTHS_IN_YEAR && dateMonth > month) ||
        (month === MONTHS_IN_YEAR && dateMonth === 1);
      const isPrevMonth =
        dateMonth < month || (dateMonth === MONTHS_IN_YEAR && month === 1);
      const isFirstDayOfWeek = date.getUTCDay() === firstWeekDayGap;

      // проверка на необходимость продолжать заполнять массив
      // если fullSize === false, и начался следующий месяц, и день недели понедельник, то тогда закончить заполнение
      if (!fullSize && isNextMonth && isFirstDayOfWeek) {
        break;
      }

      if (!isNextMonth) {
        lastCurrentMonthIndex++;
      }

      if (isPrevMonth) {
        startMonthIndex++;
      }

      grid.push({
        isOutOfAvailableRange: dateMonth !== month,
        selected:
          !!selectedDate &&
          +date >= +selectedDate &&
          +date < +addDays(selectedDate, 1),
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
