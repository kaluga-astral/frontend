import { useMemo } from 'react';

import { TableCell } from '../../Table';
import { CellProps } from '../types';
import { Typography } from '../../Typography';

export function DataGridCell<T>({
  row,
  cell: { field, renderCell, format, clickCallBack, align = 'left' },
}: CellProps<T>) {
  const handleClickCell = (): void => {
    if (clickCallBack) clickCallBack(row);
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
