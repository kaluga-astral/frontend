import { useMemo } from 'react';

import { MinMaxDate } from '../../types/minMaxDate';
import { buildIsoDate } from '../../utils/buildIsoDate';

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
    const baseDate = buildIsoDate({
      year: currentDate.getUTCFullYear(),
      month: currentDate.getUTCMonth() + 1,
      day: currentDate.getUTCDate(),
      hour: currentDate.getUTCHours(),
    });

    if (+baseDate < +minDate) {
      return minDate;
    }

    if (+baseDate > +maxDate) {
      return maxDate;
    }

    return baseDate;
  }, [minDate, maxDate]);
