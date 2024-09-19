import { useMemo } from 'react';

import { type buildDaysCalendarGrid } from '../../../utils/date';

import { filterSelectedRanges, optimizeRangeDates } from './utils';

type UseLogicParams = Pick<
  Parameters<typeof buildDaysCalendarGrid>[0],
  | 'baseDate'
  | 'selectedDate'
  | 'isMondayFirst'
  | 'minDate'
  | 'maxDate'
  | 'hoveredDate'
  | 'selectedRanges'
>;

export const useLogic = ({
  selectedRanges,
  selectedDate,
  hoveredDate,
  isMondayFirst = true,
  baseDate,
}: UseLogicParams) => {
  const accumulator = useMemo(() => new Map(), [baseDate]);

  const { dateA: memoizedSelectedDate, dateB: memoizedHoveredDate } = useMemo(
    () =>
      optimizeRangeDates({
        baseDate: baseDate,
        dateA: selectedDate,
        dateB: hoveredDate,
        isMondayFirst: isMondayFirst,
        accumulator,
      }),
    [hoveredDate, selectedDate, baseDate],
  );

  const memoizedSelectedRanges = useMemo(
    () => filterSelectedRanges(baseDate, isMondayFirst, selectedRanges),
    [selectedRanges, baseDate],
  );

  return {
    memoizedSelectedDate,
    memoizedHoveredDate,
    memoizedSelectedRanges,
  };
};
