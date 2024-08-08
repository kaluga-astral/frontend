export type LangItemValues = {
  /**
   * перевод в единственном числе, обязательный
   * @example 'день'
   */
  single: string;
  /**
   * перевод в множественном числе, опциональный
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
  | 'day'
  | 'from'
  | 'to';

export type LanguageMap = Record<LangItemNames, LangItemValues>;
