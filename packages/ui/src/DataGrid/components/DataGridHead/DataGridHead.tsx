import { SortFillSm } from '@astral/icons';
import {
  TableHead as MuiTableHead,
  TableCell,
  TableRow,
  TableSortLabel,
} from '@mui/material';

import { Checkbox, Typography } from '../../..';
import { DataGridHeadProps } from '../../types';

export function DataGridHead<T>({
  onSelectAllClick,
  numSelected,
  columns,
  rowCount,
  rowSelected = true,
}: DataGridHeadProps<T>) {
  const isChecked = rowCount > 0 && numSelected === rowCount;
  const isIndeterminate = numSelected > 0 && numSelected < rowCount;

  return (
    <MuiTableHead>
      <TableRow>
        {rowSelected && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={isIndeterminate}
              checked={isChecked}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}
        {columns.map((headCell) => (
          <TableCell key={headCell.field} align="left">
            <Typography
              variant="small"
              color={(theme) => theme.palette.grey[700]}
              fontSize={(theme) => theme.typography.small.fontSize}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              {headCell.label}
            </Typography>
            {headCell.sortable && (
              <TableSortLabel active IconComponent={SortFillSm} />
            )}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}
