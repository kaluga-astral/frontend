import { DateCompareDeep, checkIsDateInRange } from '../../../../utils/date';
import { makeEdgeDates } from '../makeEdgeDates';

type Range = {
  dateA: Date;
  dateB: Date;
};

const checkDayInRange = (date: Date, dateA: Date, dateB: Date) =>
  checkIsDateInRange({
    date,
    dateA,
    dateB,
    deep: DateCompareDeep.day,
  });

/**
 * Утилита для фильтрации списка, от выбранных диапазонов, которые не имеют отношения к основному диапазону
 */
export const filterSelectedRanges = (
  baseDate: Date,
  isMondayFirst: boolean,
  ranges?: Range[] | null,
): Range[] | null => {
  if (!ranges || ranges.length === 0) {
    return null;
  }

  const { startDate, endDate } = makeEdgeDates(baseDate, isMondayFirst);

  const filtered = ranges.filter(
    (range) =>
      // входит ли начальная дата в выбранный диапазон
      checkDayInRange(startDate, range.dateA, range.dateB) ||
      // входит ли конечная дата в выбранный диапазон
      checkDayInRange(endDate, range.dateA, range.dateB) ||
      // входит ли начало выбранного диапазона в основной диапазон
      checkDayInRange(range.dateA, startDate, endDate) ||
      // входит ли конец выбранного диапазона в основной диапазон
      checkDayInRange(range.dateB, startDate, endDate),
  );

  if (filtered.length === 0) {
    return null;
  }

  return filtered;
};
