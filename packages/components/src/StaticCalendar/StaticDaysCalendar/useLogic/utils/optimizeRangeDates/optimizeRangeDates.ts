import { addDays, type buildDaysCalendarGrid } from '../../../../../utils/date';
import { makeEdgeDates } from '../makeEdgeDates';

const getFromAccumulator = (date: Date, accumulator: Map<string, Date>) => {
  const key = date.toISOString();

  if (!accumulator.has(key)) {
    accumulator.set(key, date);
  }

  return accumulator.get(key)!;
};

const getBySingle = (
  date: Date | null | undefined,
  beforeStart: Date,
  afterEnd: Date,
) => {
  if (!date) {
    return null;
  }

  const isLessThanStart = date <= beforeStart;
  const isMoreThanEnd = date >= afterEnd;

  return (
    (isLessThanStart && beforeStart) || (isMoreThanEnd && afterEnd) || date
  );
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
  dateA: Date | null;
  dateB: Date | null;
} => {
  if (!dateA && !dateB) {
    return { dateA: null, dateB: null };
  }

  const { startDate, endDate } = makeEdgeDates(baseDate, isMondayFirst);
  const beforeStart = getFromAccumulator(addDays(startDate, -1), accumulator);
  const afterEnd = getFromAccumulator(addDays(endDate, 1), accumulator);

  if (dateA && dateB) {
    const isALessThanStart = dateA < startDate;
    const isBLessThanStart = dateB < startDate;

    const isAMoreThanEnd = dateA > endDate;
    const isBMoreThanEnd = dateB > endDate;

    if (
      (isALessThanStart && isBLessThanStart) ||
      (isAMoreThanEnd && isBMoreThanEnd)
    ) {
      return { dateA: null, dateB: null };
    }
  }

  return {
    dateA: getBySingle(dateA, beforeStart, afterEnd),
    dateB: getBySingle(dateB, beforeStart, afterEnd),
  };
};
