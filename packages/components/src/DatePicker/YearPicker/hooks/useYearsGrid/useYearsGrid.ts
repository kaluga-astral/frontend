import { useContext, useMemo } from 'react';

import { YEARS_IN_GRID } from '../../constants';
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

export type YearItem = {
  /**
   * номер года для рендера в календаре
   */
  year: number;
};

// отступ означающий на сколько нужно сделать отступ в годовом календаре, чтобы опорный год отрендерился в указанном месте
// если делать без него, то опорный год будет отрендерен в самом начале списка
const YEAR_OFFSET = 4;

export const useYearsGrid: CalendarGridBuilder<YearItem> = ({
  baseDate,
  selectedDate,
  selectedRanges,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);

  return useMemo(() => {
    const grid: CalendarGridItem<YearItem>[] = [];

    const baseYear = baseDate.getUTCFullYear();
    const currentYear = new Date().getFullYear();
    const selectedYear = selectedDate?.getUTCFullYear();

    for (let i = 0 - YEAR_OFFSET; i < YEARS_IN_GRID - YEAR_OFFSET; i++) {
      const date = buildIsoDate({ year: baseYear + i });
      const year = date.getUTCFullYear();

      grid.push({
        date,
        year,
        isSelected: selectedYear === year,
        isCurrentInUserLocalTime: year === currentYear,
        isInSelectedRange:
          selectedRanges?.some(({ dateA, dateB }) =>
            checkIsDateInRange({
              date,
              dateA,
              dateB,
              deep: DateCompareDeep.year,
            }),
          ) ?? false,
        isDisabled: isDateOutOfRange({
          date,
          dateA: minDate,
          dateB: maxDate,
          deep: DateCompareDeep.year,
        }),
      });
    }

    return grid;
  }, [baseDate, selectedDate, maxDate, minDate, selectedRanges]);
};
