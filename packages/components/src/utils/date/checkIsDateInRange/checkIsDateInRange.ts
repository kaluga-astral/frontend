import {
  type DateCompareDeep,
  isDate,
  isDateOutOfRange,
} from '../../../utils/date';

type IsDateBetweenSelectedAndRangeDatesOptions = {
  date: Date;
  dateA?: Date | null;
  dateB?: Date | null;
  deep: DateCompareDeep;
};

/**
 * утилита проверки даты на то, что она попадает в указанный диапазон
 */
export const checkIsDateInRange = ({
  dateA,
  dateB,
  date,
  deep,
}: IsDateBetweenSelectedAndRangeDatesOptions): boolean =>
  isDate(dateA) &&
  isDate(dateB) &&
  !isDateOutOfRange({ date, dateA, dateB, deep });
