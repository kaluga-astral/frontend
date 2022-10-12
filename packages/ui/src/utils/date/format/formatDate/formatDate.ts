import dayjs from 'dayjs';

import { DateMask } from '../maskDate';

/**
 * @description утилита для генерации строковой даты по заданной маске
 */
export const formatDate = (date: Date, mask: DateMask): string =>
  dayjs(date).format(mask);
