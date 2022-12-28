import { zeroPad } from '../../../zeroPad';
import { DateMask, DateMaskElements } from '../maskDate';

type ElementsMap = Record<DateMaskElements, (date: Date) => number>;

const elementsMap: ElementsMap = {
  [DateMaskElements.day]: (date) => date.getUTCDate(),
  [DateMaskElements.month]: (date) => date.getUTCMonth() + 1,
  [DateMaskElements.year]: (date) => date.getUTCFullYear(),
  [DateMaskElements.hour]: (date) => date.getUTCHours(),
  [DateMaskElements.minute]: (date) => date.getUTCMinutes(),
  [DateMaskElements.second]: (date) => date.getUTCSeconds(),
};

/**
 * @description утилита для генерации строковой даты по заданной маске
 */
export const formatDate = (
  date: Date,
  mask: DateMask,
  separator = '.',
): string =>
  mask
    .split(separator)
    .map((element) => elementsMap[element]?.(date))
    .filter(Boolean)
    .map((value) => zeroPad(value, 2))
    .join(separator);
