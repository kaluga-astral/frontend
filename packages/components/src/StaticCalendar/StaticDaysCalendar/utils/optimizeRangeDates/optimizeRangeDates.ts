import { addDays, type buildDaysCalendarGrid } from '../../../../utils/date';
import { makeEdgeDates } from '../makeEdgeDates';

const getFromAccumulator = (date: Date, accumulator: Map<string, Date>) => {
  const key = date.toISOString();

  if (!accumulator.has(key)) {
    accumulator.set(key, date);
  }

  return accumulator.get(key);
};

type OptimizeRangeDatesParams = Pick<
  Parameters<typeof buildDaysCalendarGrid>[0],
  'isMondayFirst'
> & {
  baseDate: Date;
  dateA?: Date | null;
  dateB?: Date | null;
  /**
   * аккумулятор ссылок на инстансы Date,
   * т.к. две даты друг другу не равны, т.е. `new Date(2024) == new Date(2024)` это false,
   * хоть мы и будем отдавать юридически одну и ту же дату, фактически это будут разные ссылки,
   * и поэтому мемоизация для разных ссылок не сработает,
   * аккумулятор позволит нам отдавать одну и ту же ссылку
   */
  accumulator: Map<string, Date>;
};

export const optimizeRangeDates = ({
  baseDate,
  dateA,
  dateB,
  isMondayFirst,
  accumulator,
}: OptimizeRangeDatesParams): {
  dateA?: Date | null;
  dateB?: Date | null;
} => {
  if (!dateA || !dateB) {
    return { dateA: null, dateB: null };
  }

  const { startDate, endDate } = makeEdgeDates(baseDate, isMondayFirst);

  const isALessThanStartDate = dateA < startDate;
  const isBLessThanStartDate = dateB < startDate;

  const isAMoreThanEndDate = dateA > endDate;
  const isBMoreThanEndDate = dateB > endDate;

  if (
    (isALessThanStartDate && isBLessThanStartDate) ||
    (isAMoreThanEndDate && isBMoreThanEndDate)
  ) {
    return { dateA: null, dateB: null };
  }

  const beforeStart = getFromAccumulator(addDays(startDate, -1), accumulator);
  const afterEnd = getFromAccumulator(addDays(endDate, 1), accumulator);

  if (isALessThanStartDate && isBMoreThanEndDate) {
    return { dateA: beforeStart, dateB: afterEnd };
  }

  if (isAMoreThanEndDate && isBLessThanStartDate) {
    return { dateA: afterEnd, dateB: beforeStart };
  }

  const isAInMiddle = dateA >= startDate && dateA <= endDate;
  const isBInMiddle = dateB >= startDate && dateB <= endDate;

  if (isAInMiddle && isBLessThanStartDate) {
    return { dateA, dateB: beforeStart };
  }

  if (isAInMiddle && isBMoreThanEndDate) {
    return { dateA, dateB: afterEnd };
  }

  if (isALessThanStartDate && isBInMiddle) {
    return { dateA: beforeStart, dateB };
  }

  if (isAMoreThanEndDate && isBInMiddle) {
    return { dateA: afterEnd, dateB };
  }

  return { dateA, dateB };
};
