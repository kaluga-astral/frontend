/**
 * элемент для рендера в календаре
 */
export type GridItem<T> = {
  /**
   * дата календаря, будет использована в качестве опорной при выборе в календаре
   */
  date: Date;
  /**
   * флаг, обозначающий, что дата совпадает с выбранным
   */
  selected: boolean;
  /**
   * флаг, обозначающий, что дата совпадает с текущей датой пользователя
   */
  isCurrentInUserLocalTime: boolean;
  /**
   * флаг, обозначающий, что дата попадает в выбранный пользователем интервал
   */
  isInSelectedRange: boolean;
  /**
   * флаг, обозначающий что элемент будет не доступен к выбору
   */
  disabled: boolean;
} & T;

export type GridBuilderResult<T> = {
  grid: GridItem<T>[];
};

type GridBuilderOptions<T = {}> = {
  /**
   * опорная дата, для построения массива календаря
   */
  baseDate: Date;
  /**
   * выбранная дата, будет использоваться для сверки элемента массива с этой датой на предмет совпадения
   */
  selectedDate?: Date | null;
  /**
   * дата, относительно которой будет происходить сравнение на попадание в выбранный интервал
   */
  rangeDate?: Date | null;
} & T;

export type GridBuilder<Item = {}, Options = {}> = (
  options: GridBuilderOptions<Options>,
) => GridBuilderResult<Item>;
