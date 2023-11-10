import type { GridBuilderResult, GridItem } from '../../types';
import type { IsDateOutOfRangeOptions } from '../../../utils/date';
import { isDateOutOfRange } from '../../../utils/date';

type BuildGridResultOptions<T> = {
  /**
   * @description массив элементов для рендера в календаре
   */
  grid: GridItem<T>[];
  /**
   * @description утилита, которая будет вызываться для добавления к минимальной и максимальной дате из грида, и сравнения с minDate и maxDate, в следствии мы выясним, являются ли сосдние элементы задизейбленными
   */
  addCb: (date: Date, count: number) => Date;
  /**
   * @description индекс элемента от которого надо чекнуть предыдущий на disabled
   */
  indexPrevDisabledCheck?: number;
  /**
   * @description индекс элемента от которого надо чекнуть следующий на disabled
   */
  indexNextDisabledCheck?: number;
} & Omit<IsDateOutOfRangeOptions, 'date'>;

export const buildGridResult = <T>({
  grid,
  addCb,
  dateB,
  dateA,
  indexPrevDisabledCheck = 0,
  indexNextDisabledCheck = grid.length - 1,
  deep,
}: BuildGridResultOptions<T>): GridBuilderResult<T> => ({
  grid,
  isPrevDisabled: isDateOutOfRange({
    date: addCb(grid[indexPrevDisabledCheck].date, -1),
    dateB: dateB,
    dateA: dateA,
    deep,
  }),
  isNextDisabled: isDateOutOfRange({
    date: addCb(grid[indexNextDisabledCheck].date, 1),
    dateA: dateA,
    dateB: dateB,
    deep,
  }),
});
