import { useMemo } from 'react';

import type { MinMaxDate } from '../../types';
import { addMonths, buildIsoDate } from '../../../utils/date';

type UseBaseDateInRangeOptions = MinMaxDate & {
  /**
   * @description смещение базовой даты в месяцах.
   * ожидается использование в DateRangePicker, для создания опорной даты второго календаря,
   * @default 0
   */
  monthOffset?: number;
};

/**
 * @description хук который выдаст нам опорную дату, которая будет в пределах от минимальной, до максимальной, пригодится, когда текущая дата меньше минимальной, или больше миаксимальной.
 */
export const useBaseDateInRange = ({
  minDate,
  maxDate,
  monthOffset = 0,
}: UseBaseDateInRangeOptions): Date =>
  useMemo(() => {
    const currentDate = addMonths(new Date(), monthOffset);
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
  }, [minDate, maxDate, monthOffset]);
