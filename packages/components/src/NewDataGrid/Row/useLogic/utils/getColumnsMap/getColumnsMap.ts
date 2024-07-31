import type { CellValue, DataGridRowOptionColumns } from '../../../../types';

type GetColumnsMapResult<TData> =
  | Record<keyof TData, Omit<TData, 'field'>>
  | {};

export const getColumnsMap = <TData extends Record<string, CellValue>>(
  columns: DataGridRowOptionColumns<TData>[],
): GetColumnsMapResult<TData> =>
  columns.reduce((acc, { field, ...childrenColumnsOptions }) => {
    if (field) {
      return {
        ...acc,
        [field as string]: childrenColumnsOptions,
      };
    }

    return acc;
  }, {});
