import { DateMask, DateMaskElements } from '../../types/maskDate';
import { BuildIsoDateStringOptions } from '../buildIsoDateString';
import { buildIsoDate } from '../buildIsoDate';

type ElementsMap = Record<DateMaskElements, keyof BuildIsoDateStringOptions>;

const orderMap: ElementsMap = {
  [DateMaskElements.year]: 'year',
  [DateMaskElements.month]: 'month',
  [DateMaskElements.day]: 'day',
  [DateMaskElements.hour]: 'hour',
  [DateMaskElements.minute]: 'minute',
  [DateMaskElements.second]: 'second',
};

export const maskToDate = (date: string, mask: DateMask): Date => {
  const dateArr = date.split('.');
  const options: BuildIsoDateStringOptions = { year: 1900 };

  mask.split('.').forEach((element, index) => {
    options[orderMap[element as DateMaskElements]] = parseInt(dateArr[index]);
  });

  return buildIsoDate(options);
};
