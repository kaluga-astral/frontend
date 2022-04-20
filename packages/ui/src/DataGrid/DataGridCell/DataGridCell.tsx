import { useMemo } from 'react';

import { TableCell } from '../../Table';
import { Typography } from '../../Typography';

import { CellProps } from './types';

export function DataGridCell<T>({
  row,
  cell: { field, renderCell, format, align = 'left' },
}: CellProps<T>) {
  const formattedValue = useMemo(() => {
    if (format) {
      return format(row);
    }

    return row[field];
  }, [field, format, row]);

  return (
    <TableCell align={align}>
      {renderCell && renderCell(row)}
      {!renderCell && <Typography>{formattedValue}</Typography>}
    </TableCell>
  );
}
