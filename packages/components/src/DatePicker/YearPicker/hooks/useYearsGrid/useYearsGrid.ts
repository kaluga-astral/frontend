import { useContext, useMemo } from 'react';

import { YEARS_IN_GRID } from '../../constants';
import { type GridBuilder, type GridItem } from '../../../types';
import {
  DateCompareDeep,
  buildIsoDate,
  isDateOutOfRange,
} from '../../../../utils/date';
import {
  buildGridResult,
  isDateBetweenSelectedAndRangeDates,
} from '../../../utils';
import { MinMaxDateContext } from '../../../MinMaxDateContext';

export type YearItem = {
  /**
   * номер года для рендера в календаре
   */
  year: number;
};

// отступ означающий на сколько нужно сделать отступ в годовом календаре, чтобы опорный год отрендерился в указанном месте
// если делать без него, то опорный год будет отрендерен в самом начале списка
const YEAR_OFFSET = 4;

export const useYearsGrid: GridBuilder<YearItem> = ({
  baseDate,
  selectedDate,
  rangeDate,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);

  return useMemo(() => {
    const grid: GridItem<YearItem>[] = [];

    const baseYear = baseDate.getUTCFullYear();
    const currentYear = new Date().getFullYear();
    const selectedYear = selectedDate?.getUTCFullYear();

    for (let i = 0 - YEAR_OFFSET; i < YEARS_IN_GRID - YEAR_OFFSET; i++) {
      const date = buildIsoDate({ year: baseYear + i });
      const year = date.getUTCFullYear();

      grid.push({
        date,
        year,
        selected: selectedYear === year,
        isCurrentInUserLocalTime: year === currentYear,
        isInSelectedRange: isDateBetweenSelectedAndRangeDates({
          date,
          selectedDate,
          rangeDate,
          deep: DateCompareDeep.year,
        }),
        disabled: isDateOutOfRange({
          date,
          dateA: minDate,
          dateB: maxDate,
          deep: DateCompareDeep.year,
        }),
      });
    }

    return buildGridResult({
      grid,
      dateA: minDate,
      dateB: maxDate,
      deep: DateCompareDeep.year,
    });
  }, [baseDate, selectedDate, maxDate, minDate, rangeDate]);
};
