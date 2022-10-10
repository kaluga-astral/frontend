import { useContext, useEffect, useState } from 'react';

import { MinMaxDateContext } from '../../components/MinMaxDateContext';
import {
  DateCompareDeep,
  isDateOutOfRange,
} from '../../../utils/isDateOutOfRange';
import { areDatesSame } from '../../../utils/areDatesSame';

export const useSelectedBaseDate = (selectedDate?: Date | null) => {
  const { minDate, maxDate } = useContext(MinMaxDateContext);
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

  return baseDate;
};
