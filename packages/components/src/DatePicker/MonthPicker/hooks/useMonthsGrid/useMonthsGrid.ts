import { useContext, useMemo } from 'react';

import { MONTHS_IN_YEAR } from '../../../constants/counts';
import {
  DateCompareDeep,
  addMonths,
  buildIsoDate,
  isDateOutOfRange,
} from '../../../../utils/date';
import { GridBuilder, GridItem } from '../../../types';
import { buildGridResult } from '../../../utils/buildGridItem';
import { MinMaxDateContext } from '../../../MinMaxDateContext';

export type MonthItem = {
  /**
   * @description нормализованный день месяца для использования в календаре
   */
  month: number;
};

export const useMonthsGrid: GridBuilder<MonthItem> = ({
  baseDate,
  selectedDate,
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
        isCurrent: i === currentMonth && year === currentYear,
        disabled: isDateOutOfRange({
          date,
          minDate,
          maxDate,
          deep: DateCompareDeep.month,
          log: true,
        }),
      });
    }

    return buildGridResult<MonthItem>({
      grid,
      minDate,
      maxDate,
      addCb: addMonths,
      deep: DateCompareDeep.month,
    });
  }, [baseDate, selectedDate]);
};
