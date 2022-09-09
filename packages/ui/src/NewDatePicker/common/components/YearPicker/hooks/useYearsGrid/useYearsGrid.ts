import { useContext } from 'react';

import { buildIsoDateString } from '../../../../utils/buildIsoDateString';
import { YEARS_IN_GRID } from '../../constants';
import { isDateOutOfRange } from '../../../../utils/isDateOutOfRange';
import { GridBuilder, GridItem } from '../../../../types/gridBuilder';
import { addYears } from '../../../../utils/addYears';
import { buildGridResult } from '../../../../utils/buildGridItem';
import { MinMaxDateContext } from '../../../MinMaxDateContext';

export type YearItem = {
  year: number;
};

export const useYearsGrid: GridBuilder<YearItem> = ({
  baseDate,
  selectedDate,
}) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);
  const baseYear = baseDate.getUTCFullYear();

  const currentYear = new Date().getFullYear();

  const grid: GridItem<YearItem>[] = [];

  for (let i = YEARS_IN_GRID / -2; i < YEARS_IN_GRID / 2; i++) {
    const date = new Date(buildIsoDateString(baseYear + i));
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
