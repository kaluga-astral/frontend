import { addDays } from '@astral/utils';

import { DAYS_IN_WEEK } from '../../../../../constants';
import {
  DAYS_CALENDAR_ITEMS_COUNT,
  buildIsoDate,
} from '../../../../../utils/date';

/**
 * Утилита создающая крайние даты для основного диапазона
 */
export const makeEdgeDates = (baseDate: Date, isMondayFirst?: boolean) => {
  const month = baseDate.getUTCMonth() + 1;

  const optimizedBaseDate = buildIsoDate({
    year: baseDate.getUTCFullYear(),
    month,
  });

  const firstDayCompensate = isMondayFirst ? 0 : 1;
  const weekBaseDate = optimizedBaseDate.getUTCDay();

  const startDate = addDays(
    optimizedBaseDate,
    (DAYS_IN_WEEK - weekBaseDate + firstDayCompensate) * -1,
  );

  const endDate = addDays(startDate, DAYS_CALENDAR_ITEMS_COUNT - 1);

  return {
    startDate,
    endDate,
  };
};
