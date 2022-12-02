import { useContext, useEffect, useState } from 'react';

import { MinMaxDateContext } from '../../MinMaxDateContext';
import {
  DateCompareDeep,
  areDatesSame,
  isDate,
  isDateOutOfRange,
} from '../../../utils/date';

export const useSelectedBaseDate = (selectedDate?: Date): Date | undefined => {
  const { minDate, maxDate } = useContext(MinMaxDateContext);
  const [baseDate, setBaseDate] = useState<Date | undefined>(selectedDate);

  useEffect(() => {
    if (!isDate(selectedDate)) {
      setBaseDate(undefined);

      return;
    }

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
      setBaseDate(undefined);
    } else {
      setBaseDate(selectedDate);
    }
  }, [selectedDate]);

  return baseDate;
};
