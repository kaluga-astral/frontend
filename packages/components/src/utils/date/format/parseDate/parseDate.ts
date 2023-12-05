import { type DateMask, DateMaskElements } from '../maskDate';
import {
  type BuildIsoDateStringOptions,
  buildIsoDate,
} from '../../buildIsoDate';

type ElementsMap = Record<DateMaskElements, keyof BuildIsoDateStringOptions>;

const orderMap: ElementsMap = {
  [DateMaskElements.year]: 'year',
  [DateMaskElements.month]: 'month',
  [DateMaskElements.day]: 'day',
  [DateMaskElements.hour]: 'hour',
  [DateMaskElements.minute]: 'minute',
  [DateMaskElements.second]: 'second',
};

/**
 * @description утилита конвертации строковой даты созданной по маске обратно в Date
 */
export const parseDate = (
  date: string,
  mask: DateMask,
  separator = '.',
): Date | undefined => {
  const dateArr = date.split(separator);
  const options: BuildIsoDateStringOptions = { year: 1900 };

  mask.split(separator).forEach((element, index) => {
    options[orderMap[element as DateMaskElements]] = parseInt(dateArr[index]);
  });

  if (Object.values(options).some((value) => isNaN(value))) {
    return undefined;
  }

  return buildIsoDate(options);
};
