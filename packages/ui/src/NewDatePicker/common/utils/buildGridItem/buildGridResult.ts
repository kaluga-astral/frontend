import { GridBuilderResult, GridItem } from '../../types/gridBuilder';
import { AddHelper } from '../../types/addHelper';
import { isDateOutOfRange } from '../isDateOutOfRange';
import { MinMaxDate } from '../../types/minMaxDate';

type BuildGridResultOptions<T> = {
  /**
   * @description массив элементов для рендера в календаре
   */
  grid: GridItem<T>[];
  /**
   * @description хелпер, который будет вызываться при клике по стрелкам вперед/назад
   */
  addCb: AddHelper;
} & MinMaxDate;

export const buildGridResult = <T>({
  grid,
  addCb,
  maxDate,
  minDate,
}: BuildGridResultOptions<T>): GridBuilderResult<T> => ({
  grid,
  isPrevDisabled: isDateOutOfRange({
    date: addCb(grid[0].date, -1),
    maxDate,
    minDate,
  }),
  isNextDisabled: isDateOutOfRange({
    date: addCb((grid.at(-1) as GridItem<{}>).date, 1),
    minDate,
    maxDate,
  }),
});
