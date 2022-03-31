import { useMemo } from 'react';

import { TableCell } from '../../Table';
import { Typography } from '../../Typography';

import { CellProps } from './types';

export function DataGridCell<T>({
  row,
  cell: { field, renderCell, format, onClick, align = 'left' },
}: CellProps<T>) {
  const handleClickCell = (): void => {
    if (onClick) onClick(row);
  };

  const formattedValue = useMemo(() => {
    if (format) {
      return format(row);
    }

    return row[field];
  }, [field, format]);

  return (
    <TableCell align={align} onClick={handleClickCell}>
      {renderCell && renderCell(row)}
      {!renderCell && <Typography>{formattedValue}</Typography>}
    </TableCell>
  );
}
