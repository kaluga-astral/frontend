import { isDate } from '../isDate';
import { MinMaxDate } from '../../types/minMaxDate';

type IsDateOutOfRangeOptions = {
  date: Date;
} & MinMaxDate;

/**
 * @description хелпер проверки даты на вхождение в указанный диапазон между minDate и maxDate
 */
export const isDateOutOfRange = ({
  date,
  minDate,
  maxDate,
}: IsDateOutOfRangeOptions): boolean =>
  (isDate(minDate) && +date < +minDate) ||
  (isDate(maxDate) && +date > +maxDate);
