import { type LanguageMap } from './types';

export const DEFAULT_PLACEHOLDER = '__.__.____';

export const russianMap: LanguageMap = {
  toYearPick: { single: 'К выбору года' },
  toMonthPick: { single: 'К выбору месяца' },
  toDayPick: { single: 'К выбору дня' },
  previous: { single: 'Предыдущий', plural: 'Предыдущие' },
  next: { single: 'Следующий', plural: 'Следующие' },
  year: { single: 'год', plural: 'года' },
  month: { single: 'месяц', plural: 'месяца' },
  day: { single: 'день', plural: 'дни' },
  from: { single: 'от' },
  to: { single: 'до' },
};

export const DEFAULT_DATE_MASK = 'DD.MM.YYYY';

/**
 * количество столбцов для пикера с большими кнопками, например пикер месяца или пикер года
 */
export const ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID = 3;
