import { useContext } from 'react';

import { YEARS_IN_GRID } from '../../constants';
import { isDateOutOfRange } from '../../../../utils/isDateOutOfRange';
import { GridBuilder, GridItem } from '../../../../types/gridBuilder';
import { addYears } from '../../../../utils/addYears';
import { buildGridResult } from '../../../../utils/buildGridItem';
import { MinMaxDateContext } from '../../../MinMaxDateContext';
import { buildIsoDate } from '../../../../utils/buildIsoDate';

export type YearItem = {
  /**
   * @description номер года для рендера в календаре
   */
  year: number;
};

const YEAR_OFFSET = 4;

export const useYearsGrid: GridBuilder<YearItem> = ({
  baseDate,
  selectedDate,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);
  const baseYear = baseDate.getUTCFullYear();

  const currentYear = new Date().getFullYear();

  const grid: GridItem<YearItem>[] = [];

  for (let i = 0 - YEAR_OFFSET; i < YEARS_IN_GRID - YEAR_OFFSET; i++) {
    const date = buildIsoDate({ year: baseYear + i });
    const year = date.getUTCFullYear();

    grid.push({
      date,
      year,
      selected: selectedDate?.getUTCFullYear() === year,
      isCurrent: year === currentYear,
      disabled: isDateOutOfRange({ date, minDate, maxDate }),
    });
  }

  return buildGridResult({ grid, minDate, maxDate, addCb: addYears });
};
