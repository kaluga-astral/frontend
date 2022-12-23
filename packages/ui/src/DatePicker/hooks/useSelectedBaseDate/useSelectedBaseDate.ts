import { useEffect, useState } from 'react';

import {
  DateCompareDeep,
  areDatesSame,
  isDate,
  isDateOutOfRange,
} from '../../../utils/date';
import { MinMaxDate } from '../../types';

type UseSelectedBaseDateOptions = {
  currentValue?: Date;
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
}: UseSelectedBaseDateOptions): Date | undefined => {
  const [baseDate, setBaseDate] = useState<Date | undefined>(currentValue);

  useEffect(() => {
    if (!isDate(currentValue)) {
      setBaseDate(undefined);

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
      setBaseDate(undefined);
    } else {
      setBaseDate(currentValue);
    }
  }, [currentValue]);

  return baseDate;
};
