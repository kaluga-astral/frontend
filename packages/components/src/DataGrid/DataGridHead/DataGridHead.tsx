import { type ChangeEvent, useCallback, useMemo } from 'react';

import { TableHead } from '../../Table/TableHead';
import { TableCell, TableRow } from '../../Table';
import { Checkbox } from '../../Checkbox';
import { SortStates } from '../enums';
import { DataGridHeadColumn } from '../DataGridHeadColumn';
import {
  type DataGridColumns,
  type DataGridRow,
  type DataGridSort,
} from '../types';

import { DataGridInfiniteHead } from './styles';

export type DataGridHeadProps<
  TData extends object = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = {
  columns: DataGridColumns<TData>[];
  selectable: boolean;
  /**
   * @example <DataGridHead isInfinite />
   * Меняет компонент шапки таблицы для DataGridInfinite
   */
  isInfinite?: boolean;
  onSelectAllRows: (event: ChangeEvent<HTMLInputElement>) => void;
  sorting?: DataGridSort<TSortField>;
  onSort?: (sorting: DataGridSort<TSortField> | undefined) => void;
  uncheckedRowsCount: number;
  rowsCount: number;
};

export const DataGridHead = <
  TData extends object,
  TSortField extends keyof TData,
>({
  columns,
  selectable,
  onSelectAllRows,
  rowsCount,
  onSort,
  sorting,
  uncheckedRowsCount,
  isInfinite,
}: DataGridHeadProps<TData, TSortField>) => {
  const checked = useMemo(
    () => !Boolean(uncheckedRowsCount) && rowsCount > 0,
    [uncheckedRowsCount, rowsCount],
  );

  const indeterminate = useMemo(
    () => uncheckedRowsCount > 0 && uncheckedRowsCount < rowsCount,
    [uncheckedRowsCount, rowsCount],
  );

  const handleSort = useCallback(
    (field: TSortField) => {
      if (!onSort) {
        return;
      }

      const isCurrentField = sorting?.fieldId === field;

      // если для выбранного столбца текущая сортировка ASC - меняем на DESC
      if (isCurrentField && sorting.sort === SortStates.ASC) {
        return onSort({ fieldId: field, sort: SortStates.DESC });
      }

      // если для выбранного столбца текущая сортировка DESC - убираем сортировку
      if (isCurrentField && sorting.sort === SortStates.DESC) {
        return onSort(undefined);
      }

      // если для выбранного столбца нет сортировки - добавляем сортировку ASC
      onSort({ fieldId: field, sort: SortStates.ASC });
    },
    [sorting, onSort],
  );

  const renderColumns = useMemo(() => {
    return columns.map(({ field, label, sortable, align, width }) => {
      return (
        <DataGridHeadColumn<TData, TSortField>
          key={label}
          sorting={sorting}
          field={field}
          onSort={handleSort}
          label={label}
          sortable={sortable}
          align={align}
          width={width}
        />
      );
    });
  }, [columns, handleSort, sorting]);

  return isInfinite ? (
    <DataGridInfiniteHead>
      {selectable && (
        <TableCell padding="checkbox">
          <Checkbox
            checked={checked}
            indeterminate={indeterminate}
            onChange={onSelectAllRows}
          />
        </TableCell>
      )}
      {renderColumns}
    </DataGridInfiniteHead>
  ) : (
    <TableHead>
      <TableRow>
        {selectable && (
          <TableCell padding="checkbox">
            <Checkbox
              checked={checked}
              indeterminate={indeterminate}
              onChange={onSelectAllRows}
            />
          </TableCell>
        )}
        {renderColumns}
      </TableRow>
    </TableHead>
  );
};
