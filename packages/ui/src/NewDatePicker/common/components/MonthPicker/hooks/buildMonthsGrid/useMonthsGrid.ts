import { useContext } from 'react';

import { MONTHS_IN_YEAR } from '../../../../constants/monthsInYear';
import { addMonths } from '../../../../utils/addMonths';
import { isDateOutOfRange } from '../../../../utils/isDateOutOfRange';
import { GridBuilder, GridItem } from '../../../../types/gridBuilder';
import { buildGridResult } from '../../../../utils/buildGridItem';
import { MinMaxDateContext } from '../../../MinMaxDateContext';
import { isDate } from '../../../../utils/isDate';
import { buildIsoDate } from '../../../../utils/buildIsoDate';

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
  const startDate = buildIsoDate({ year: baseDate.getUTCFullYear() });
  const year = startDate.getUTCFullYear();
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const grid: GridItem<MonthItem>[] = [];

  for (let i = 0; i < MONTHS_IN_YEAR; i++) {
    const date = buildIsoDate({ year, month: i + 1 });

    grid.push({
      date: addMonths(startDate, i),
      selected:
        isDate(selectedDate) &&
        selectedDate.getUTCMonth() === i &&
        selectedDate.getUTCFullYear() === year,
      month: i + 1,
      isCurrent: i === currentMonth && year === currentYear,
      disabled: isDateOutOfRange({ date, minDate, maxDate }),
    });
  }

  return buildGridResult<MonthItem>({
    grid,
    minDate,
    maxDate,
    addCb: addMonths,
  });
};
