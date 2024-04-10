import { buildIsoDate } from '../../utils/date';

export const DEFAULT_MIN_DATE = buildIsoDate({ year: 1900 });

export const DEFAULT_MAX_DATE = buildIsoDate({
  year: new Date().getUTCFullYear() + 100,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
});
