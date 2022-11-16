import { ChangeEvent, useCallback, useMemo } from 'react';

import { TableHead } from '../../Table/TableHead';
import { TableCell, TableRow } from '../../Table';
import { Checkbox } from '../../Checkbox';
import { SortStates } from '../enums';
import { DataGridHeadColumn } from '../DataGridHeadColumn';
import { DataGridColumns, DataGridRow, DataGridSort } from '../types';

export type DataGridHeadProps<
  Data extends object = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  columns: DataGridColumns<Data>[];
  selectable: boolean;
  onSelectAllRows: (event: ChangeEvent<HTMLInputElement>) => void;
  sorting?: DataGridSort<SortField>;
  onSort?: (sorting: DataGridSort<SortField> | undefined) => void;
  uncheckedRowsCount: number;
  rowsCount: number;
};

export function DataGridHead<
  Data extends object,
  SortField extends keyof Data,
>({
  columns,
  selectable,
  onSelectAllRows,
  rowsCount,
  onSort,
  sorting,
  uncheckedRowsCount,
}: DataGridHeadProps<Data, SortField>) {
  const checked = useMemo(
    () => !Boolean(uncheckedRowsCount) && rowsCount > 0,
    [uncheckedRowsCount, rowsCount],
  );

  const indeterminate = useMemo(
    () => uncheckedRowsCount > 0 && uncheckedRowsCount < rowsCount,
    [uncheckedRowsCount, rowsCount],
  );

  const handleSort = useCallback(
    (field: SortField) => {
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
        <DataGridHeadColumn<Data, SortField>
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

  return (
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
}
