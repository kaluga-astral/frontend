import { useMemo } from 'react';

import { buildDaysCalendarGrid } from '../../../../utils/date';

export const useDaysGrid = ({
  baseDate,
  selectedDate,
  rangeDate,
  isMondayFirst,
  minDate,
  maxDate,
}: Parameters<typeof buildDaysCalendarGrid>[0]) =>
  useMemo(
    () =>
      buildDaysCalendarGrid({
        baseDate,
        selectedDate,
        rangeDate,
        isMondayFirst,
        minDate,
        maxDate,
      }),
    [baseDate, selectedDate, maxDate, minDate, rangeDate],
  );
