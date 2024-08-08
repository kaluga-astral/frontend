import { useEffect, useState } from 'react';

import {
  DateCompareDeep,
  areDatesSame,
  isDate,
  isDateOutOfRange,
} from '../../../utils/date';
import { type MinMaxDate } from '../../types';

type UseSelectedBaseDateOptions = {
  currentValue?: Date | undefined | null;
} & MinMaxDate;

/**
 * @description хук предоставляющий дату для отображения в пикере,
 * на основе полученной даты от родительского компонента,
 * защищает пикер от выбора даты вне диапазона minDate и maxDate
 */
export const useSelectedBaseDate = ({
  currentValue,
  minDate,
  maxDate,
}: UseSelectedBaseDateOptions): Date | undefined | null => {
  const [baseDate, setBaseDate] = useState<Date | undefined | null>(
    currentValue,
  );

  useEffect(() => {
    if (!isDate(currentValue)) {
      setBaseDate(null);

      return;
    }

    if (areDatesSame(baseDate, currentValue)) {
      return;
    }

    if (
      !currentValue ||
      isDateOutOfRange({
        date: currentValue,
        dateA: minDate,
        dateB: maxDate,
        deep: DateCompareDeep.day,
      })
    ) {
      setBaseDate(null);
    } else {
      setBaseDate(currentValue);
    }
  }, [currentValue]);

  return baseDate;
};
