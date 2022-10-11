import { useMemo } from 'react';

import { MinMaxDate } from '../../types';
import { buildIsoDate } from '../../../utils/date';

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

    if (Number(baseDate) < Number(minDate)) {
      return minDate;
    }

    if (Number(baseDate) > Number(maxDate)) {
      return maxDate;
    }

    return baseDate;
  }, [minDate, maxDate]);
