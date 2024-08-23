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

/**
 * утилита проверки даты на то, что она попадает в указанный диапазон
 */
export const checkIsDateBetweenSelectedAndRangeDates = ({
  selectedDate,
  rangeDate,
  date,
  deep,
}: IsDateBetweenSelectedAndRangeDatesOptions): boolean =>
  isDate(selectedDate) &&
  isDate(rangeDate) &&
  !isDateOutOfRange({ date, dateA: selectedDate, dateB: rangeDate, deep });
