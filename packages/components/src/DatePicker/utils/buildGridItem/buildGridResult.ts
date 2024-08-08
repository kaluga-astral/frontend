import { type GridBuilderResult, type GridItem } from '../../types';
import { type IsDateOutOfRangeOptions } from '../../../utils/date';

type BuildGridResultOptions<T> = {
  /**
   * массив элементов для рендера в календаре
   */
  grid: GridItem<T>[];
} & Omit<IsDateOutOfRangeOptions, 'date'>;

export const buildGridResult = <T>({
  grid,
}: BuildGridResultOptions<T>): GridBuilderResult<T> => ({
  grid,
});
