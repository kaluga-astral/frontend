/**
 * @description элемент для рендера в календаре
 */
export type GridItem<T> = {
  /**
   * @description дата календаря, будет использована в качестве опорной при выборе в календаре
   */
  date: Date;
  /**
   * @description флаг, обозначающий, что дата совпадает с выбранным
   */
  selected: boolean;
  /**
   * @description флаг, обозначающий, что дата совпадает с текущей датой пользователя
   */
  isCurrent: boolean;
  /**
   * @description флаг, обозначающий, что дата попадает в выбранный пользователем интервал
   */
  isInSelectedRange: boolean;
  /**
   * @description флаг, обозначающий что элемент будет не доступен к выбору
   */
  disabled: boolean;
} & T;

export type GridBuilderResult<T> = {
  /**
   * @description флаг обозначающий, что дата идущая ДО календаря задизейблена, и можно выключить стрелку "назад"
   */
  isPrevDisabled: boolean;
  /**
   * @description флаг обозначающий, что дата идущая ПОСЛЕ календаря задизейблена, и можно выключить стрелку "вперед"
   */
  isNextDisabled: boolean;
  /**
   * @description массив элементов для рендера в календаре
   */
  grid: GridItem<T>[];
};

type GridBuilderOptions<T = {}> = {
  /**
   * @description опорная дата, для построения массива календаря
   */
  baseDate: Date;
  /**
   * @description выбранная дата, будет использоваться для сверки элемента массива с этой датой на предмет совпадения
   */
  selectedDate?: Date;
  /**
   * @description дата, относительно которой будет происходить сравнение на попадание в выбранный интервал
   */
  rangeDate?: Date;
} & T;

export type GridBuilder<Item = {}, Options = {}> = (
  options: GridBuilderOptions<Options>,
) => GridBuilderResult<Item>;
