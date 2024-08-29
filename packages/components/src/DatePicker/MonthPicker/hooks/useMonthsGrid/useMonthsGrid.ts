import { useContext, useMemo } from 'react';

import {
  DateCompareDeep,
  buildIsoDate,
  checkIsDateInRange,
  isDateOutOfRange,
} from '../../../../utils/date';
import { MinMaxDateContext } from '../../../MinMaxDateContext';
import {
  type CalendarGridBuilder,
  type CalendarGridItem,
} from '../../../../types';
import { MONTHS_IN_YEAR } from '../../../../constants';

export type MonthItem = {
  /**
   * нормализованный день месяца для использования в календаре
   */
  month: number;
};

export const useMonthsGrid: CalendarGridBuilder<MonthItem> = ({
  baseDate,
  selectedDate,
  selectedRanges,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);

  return useMemo(() => {
    const grid: CalendarGridItem<MonthItem>[] = [];
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
        isSelected: selectedMonth === i && selectedYear === year,
        month: i + 1,
        isCurrentInUserLocalTime: i === currentMonth && year === currentYear,
        isInSelectedRange:
          selectedRanges?.some(({ dateA, dateB }) =>
            checkIsDateInRange({
              date,
              dateA,
              dateB,
              deep: DateCompareDeep.month,
            }),
          ) ?? false,
        isDisabled: isDateOutOfRange({
          date,
          dateA: minDate,
          dateB: maxDate,
          deep: DateCompareDeep.month,
        }),
      });
    }

    return grid;
  }, [baseDate, selectedDate, maxDate, minDate, selectedRanges]);
};
