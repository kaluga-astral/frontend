import type {
  CellValue,
  DataGridColumns,
  DataGridRowOptionColumns,
} from '../../../../types';
import { getColumnsMap } from '../getColumnsMap';

export const mergeColumnsOptions = <TData extends Record<string, CellValue>>(
  columns: DataGridColumns<TData>[],
  childrenColumns: DataGridRowOptionColumns<TData>[] | undefined,
) => {
  if (!childrenColumns) {
    return columns;
  }

  const childrenColumnsMap = getColumnsMap(childrenColumns);

  if (!Object.keys(childrenColumnsMap).length) {
    return columns;
  }

  return columns.map((column) => {
    if (!column.hasOwnProperty('field')) {
      return column;
    }

    return {
      ...column,
      // @ts-ignore
      ...(childrenColumnsMap[column.field] || {}),
    };
  });
};
