import type { DateCompareDeep } from '../../../utils/date';
import { isDate, isDateOutOfRange } from '../../../utils/date';

type IsDateBetweenSelectedAndRangeDatesOptions = {
  date: Date;
  selectedDate?: Date;
  rangeDate?: Date;
  deep: DateCompareDeep;
};

export const isDateBetweenSelectedAndRangeDates = ({
  selectedDate,
  rangeDate,
  date,
  deep,
}: IsDateBetweenSelectedAndRangeDatesOptions): boolean =>
  isDate(selectedDate) &&
  isDate(rangeDate) &&
  !isDateOutOfRange({ date, dateA: selectedDate, dateB: rangeDate, deep });
