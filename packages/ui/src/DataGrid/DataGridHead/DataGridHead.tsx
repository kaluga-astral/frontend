import { ChangeEvent, useCallback, useMemo } from 'react';

import { TableHead } from '../../Table/TableHead';
import { TableCell, TableRow } from '../../Table';
import { Checkbox } from '../../Checkbox';
import { SortStates } from '../constants';
import { DataGridHeadColumn } from '../DataGridHeadColumn';
import { DataGridColumns, DataGridRow, DataGridSort } from '../types';

export type DataGridHeadProps<
  Data = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  columns: DataGridColumns<Data>[];
  selectable: boolean;
  onSelectAllRows: (event: ChangeEvent<HTMLInputElement>) => void;
  sorting: DataGridSort<SortField>[];
  onSort: (sorting: DataGridSort<SortField>[]) => void;
  uncheckedRowsCount: number;
  rowsCount: number;
};

export function DataGridHead<Data, SortField extends keyof Data>({
  columns,
  selectable,
  onSelectAllRows,
  rowsCount,
  onSort,
  sorting = [],
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
    (field: SortField, sortable?: boolean) => {
      if (sortable) {
        const currentSort = sorting.find(({ fieldId }) => fieldId === field);

        // если для выбранного столбца текущая сортировка ASC - меняем на DESC
        if (currentSort && currentSort.sort === SortStates.ASC) {
          const newSorting = [
            ...sorting.filter(({ fieldId }) => fieldId !== field),
            { fieldId: field, sort: SortStates.DESC },
          ];

          return onSort(newSorting);
          // если для выбранного столбца текущая сортировка DESC - убираем сортировку
        } else if (currentSort && currentSort.sort === SortStates.DESC) {
          const newSorting = sorting.filter(({ fieldId }) => fieldId !== field);

          return onSort(newSorting);
        }

        // если для выбранного столбца нет сортировки - добавляем сортировку ASC
        onSort([...sorting, { fieldId: field, sort: SortStates.ASC }]);
      }
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
