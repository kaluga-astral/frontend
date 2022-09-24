import { zeroPad } from '../zeroPad';
import { DateMask, DateMaskElements } from '../../types/maskDate';

type ElementsMap = Record<DateMaskElements, (date: Date) => number>;

const elementsMap: ElementsMap = {
  [DateMaskElements.day]: (date) => date.getUTCDate(),
  [DateMaskElements.month]: (date) => date.getUTCMonth() + 1,
  [DateMaskElements.year]: (date) => date.getUTCFullYear(),
  [DateMaskElements.hour]: (date) => date.getUTCHours(),
  [DateMaskElements.minute]: (date) => date.getUTCMinutes(),
  [DateMaskElements.second]: (date) => date.getUTCSeconds(),
};

export const dateToMask = (date: Date, mask: DateMask): string =>
  mask
    .split('.')
    .map((element) => elementsMap[element]?.(date))
    .filter(Boolean)
    .map((value) => zeroPad(value, 2))
    .join('.');
