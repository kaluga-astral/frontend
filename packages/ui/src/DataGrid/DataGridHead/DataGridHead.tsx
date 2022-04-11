import { useCallback, useMemo } from 'react';

import { TableHead } from '../../Table/TableHead';
import { TableCell, TableRow } from '../../Table';
import { Typography } from '../../Typography';
import { Checkbox } from '../../Checkbox';
import { SortStates } from '../constants';

import { StyledTableCell, StyledTableSortLabel } from './styled';
import { DataGridHeadProps } from './types';

export function DataGridHead<T>({
  columns,
  selectable,
  onSelectAllRows,
  rowsCount,
  onSort,
  sorting = [],
  uncheckedRowsCount,
}: DataGridHeadProps<T>) {
  const checked = useMemo(
    () => !Boolean(uncheckedRowsCount) && rowsCount > 0,
    [uncheckedRowsCount, rowsCount]
  );

  const indeterminate = useMemo(
    () => uncheckedRowsCount > 0 && uncheckedRowsCount < rowsCount,
    [uncheckedRowsCount, rowsCount]
  );

  const handleSort = useCallback(
    (field, sortable) => () => {
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
    [sorting]
  );

  const renderedColumns = useMemo(() => {
    return columns.map(({ field, label, sortable, align, renderCell }) => {
      const sortParams = sorting.find(({ fieldId }) => field === fieldId);
      const hideSortIcon = !Boolean(sortParams);
      const sortDirection = sortParams ? sortParams.sort : SortStates.ASC;
      const fitContent = Boolean(renderCell);

      return (
        <StyledTableCell
          key={field}
          onClick={handleSort(field, sortable)}
          fitContent={fitContent}
          align={align}
        >
          <Typography variant="pointer">{label}</Typography>
          {sortable && (
            <StyledTableSortLabel
              hideSortIcon={hideSortIcon}
              direction={sortDirection}
              active
            />
          )}
        </StyledTableCell>
      );
    });
  }, [columns, sorting]);

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
        {renderedColumns}
      </TableRow>
    </TableHead>
  );
}
