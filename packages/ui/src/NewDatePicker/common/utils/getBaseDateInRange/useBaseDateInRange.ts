import { useMemo } from 'react';

import { MinMaxDate } from '../../types/minMaxDate';
import { isDate } from '../isDate';
import { buildIsoDateString } from '../buildIsoDateString';

type UseBaseDateInRangeOptions = MinMaxDate;

/**
 * @description хук который выдаст нам опорную дату, которая будет в пределах от минимальной, до максимальной, пригодится, когда текущая дата меньше минимальной, или больше миаксимальной.
 */
export const useBaseDateInRange = ({
  minDate,
  maxDate,
}: UseBaseDateInRangeOptions): Date =>
  useMemo(() => {
    const currentDate = new Date();
    const baseDate = new Date(
      buildIsoDateString(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth() + 1,
        currentDate.getUTCDate(),
        currentDate.getUTCHours(),
      ),
    );

    if (isDate(minDate) && +baseDate < +minDate) {
      return minDate;
    }

    if (isDate(maxDate) && +baseDate > +maxDate) {
      return maxDate;
    }

    return baseDate;
  }, [minDate, maxDate]);
