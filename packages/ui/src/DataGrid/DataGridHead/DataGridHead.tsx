import { SortFillSm } from '@astral/icons';
import { useMemo } from 'react';

import { TableHead } from '../../Table/TableHead';
import { TableCell, TableRow, TableSortLabel } from '../../Table';
import { Typography } from '../../Typography';
import { Checkbox } from '../../Checkbox';
import { DataGridHeadProps } from '../types';

export function DataGridHead<T>({
  columns,
  selectable,
  onSelectAllRows,
  selectedCount,
  totalCount,
}: DataGridHeadProps<T>) {
  const checked = useMemo(
    () => Boolean(totalCount) && totalCount === selectedCount,
    [selectedCount, totalCount]
  );

  const indeterminate = useMemo(
    () => Boolean(selectedCount) && selectedCount < totalCount,
    [selectedCount, totalCount]
  );

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
        {columns.map(({ field, label, sortable }) => (
          <TableCell key={field}>
            <Typography variant="small">{label}</Typography>
            {sortable && <TableSortLabel active IconComponent={SortFillSm} />}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
