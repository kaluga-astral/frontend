/**
 * элемент для рендера в календаре
 */
export type CalendarGridItem<T> = {
  /**
   * дата календаря, будет использована в качестве опорной при выборе в календаре
   */
  date: Date;
  /**
   * флаг, обозначающий, что дата совпадает с выбранным
   */
  isSelected: boolean;
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
  isDisabled: boolean;
} & T;

export type GridBuilderResult<T> = CalendarGridItem<T>[];

type SelectedRange = {
  /**
   * Дата промежутка, может быть как началом, так и концом
   */
  dateA: Date;
  /**
   * Дата промежутка, может быть как началом, так и концом
   */
  dateB: Date;
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
   * Массив выбранных промежутков
   */
  selectedRanges?: SelectedRange[] | null;
} & T;

export type CalendarGridBuilder<Item = {}, Options = {}> = (
  options: GridBuilderOptions<Options>,
) => GridBuilderResult<Item>;
