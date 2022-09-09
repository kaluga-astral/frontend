export type GridItem<T> = {
  date: Date;
  selected: boolean;
  isCurrent: boolean;
  disabled: boolean;
} & T;

export type GridBuilderResult<T> = {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  grid: GridItem<T>[];
};

type GridBuilderOptions<T = {}> = {
  baseDate: Date;
  selectedDate?: Date;
} & T;

export type GridBuilder<Item = {}, Options = {}> = (
  options: GridBuilderOptions<Options>,
) => GridBuilderResult<Item>;
