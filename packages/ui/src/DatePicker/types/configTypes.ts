export type LangItemValues = {
  /**
   * @description перевод в единственном числе, обязательный
   * @example 'день'
   */
  single: string;
  /**
   * @description перевод в множественном числе, опциональный
   * @example 'дни'
   */
  plural?: string;
};

export type LangItemNames =
  | 'toYearPick'
  | 'toMonthPick'
  | 'toDayPick'
  | 'previous'
  | 'next'
  | 'year'
  | 'month'
  | 'day';

export type LanguageMap = Record<LangItemNames, LangItemValues>;
