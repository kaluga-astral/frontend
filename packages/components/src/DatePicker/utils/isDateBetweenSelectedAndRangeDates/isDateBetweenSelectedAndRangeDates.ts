import {
  type DateCompareDeep,
  isDate,
  isDateOutOfRange,
} from '../../../utils/date';

type IsDateBetweenSelectedAndRangeDatesOptions = {
  date: Date;
  selectedDate?: Date | null;
  rangeDate?: Date | null;
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
