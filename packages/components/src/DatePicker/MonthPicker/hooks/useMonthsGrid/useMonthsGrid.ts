import { useContext, useMemo } from 'react';

import { MONTHS_IN_YEAR } from '../../../constants';
import {
  DateCompareDeep,
  buildIsoDate,
  isDateOutOfRange,
} from '../../../../utils/date';
import { type GridBuilder, type GridItem } from '../../../types';
import {
  buildGridResult,
  isDateBetweenSelectedAndRangeDates,
} from '../../../utils';
import { MinMaxDateContext } from '../../../MinMaxDateContext';

export type MonthItem = {
  /**
   * нормализованный день месяца для использования в календаре
   */
  month: number;
};

export const useMonthsGrid: GridBuilder<MonthItem> = ({
  baseDate,
  selectedDate,
  rangeDate,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);

  return useMemo(() => {
    const grid: GridItem<MonthItem>[] = [];
    const startDate = buildIsoDate({ year: baseDate.getUTCFullYear() });
    const year = startDate.getUTCFullYear();
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const selectedMonth = selectedDate?.getUTCMonth();
    const selectedYear = selectedDate?.getUTCFullYear();

    for (let i = 0; i < MONTHS_IN_YEAR; i++) {
      const date = buildIsoDate({ year, month: i + 1 });

      grid.push({
        date,
        selected: selectedMonth === i && selectedYear === year,
        month: i + 1,
        isCurrentInUserLocalTime: i === currentMonth && year === currentYear,
        isInSelectedRange: isDateBetweenSelectedAndRangeDates({
          date,
          selectedDate,
          rangeDate,
          deep: DateCompareDeep.month,
        }),
        disabled: isDateOutOfRange({
          date,
          dateA: minDate,
          dateB: maxDate,
          deep: DateCompareDeep.month,
        }),
      });
    }

    return buildGridResult<MonthItem>({
      grid,
      dateA: minDate,
      dateB: maxDate,
      deep: DateCompareDeep.month,
    });
  }, [baseDate, selectedDate, maxDate, minDate, rangeDate]);
};
