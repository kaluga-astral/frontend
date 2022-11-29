import { useContext, useEffect, useState } from 'react';

import { MinMaxDateContext } from '../../MinMaxDateContext';
import {
  DateCompareDeep,
  areDatesSame,
  isDateOutOfRange,
} from '../../../utils/date';

type BaseDate = Date | undefined;

export const useSelectedBaseDate = (selectedDate?: Date): BaseDate => {
  const { minDate, maxDate } = useContext(MinMaxDateContext);
  const [baseDate, setBaseDate] = useState<BaseDate>(selectedDate);

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
      setBaseDate(undefined);
    } else {
      setBaseDate(selectedDate);
    }
  }, [selectedDate]);

  return baseDate;
};
