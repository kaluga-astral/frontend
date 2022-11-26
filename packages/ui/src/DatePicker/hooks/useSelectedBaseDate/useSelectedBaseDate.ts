import { useEffect, useState } from 'react';

import {
  DateCompareDeep,
  areDatesSame,
  isDateOutOfRange,
} from '../../../utils/date';
import { MinMaxDate } from '../../types';

type UseSelectedBaseDateOptions = MinMaxDate & {
  parentValue?: Date | null;
};

export const useSelectedBaseDate = ({
  parentValue,
  minDate,
  maxDate,
}: UseSelectedBaseDateOptions): [
  Date | null | undefined,
  Date | null | undefined,
  (date: Date | undefined | null) => void,
] => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined | null>(
    parentValue,
  );
  const [baseDate, setBaseDate] = useState(selectedDate);

  useEffect(() => {
    if (areDatesSame(baseDate, selectedDate)) {
      return;
    }

    if (
      !selectedDate ||
      isDateOutOfRange({
        date: selectedDate,
        minDate,
        maxDate,
        deep: DateCompareDeep.day,
      })
    ) {
      setBaseDate(null);
    } else {
      setBaseDate(selectedDate);
    }
  }, [selectedDate]);

  return [baseDate, selectedDate, setSelectedDate];
};
