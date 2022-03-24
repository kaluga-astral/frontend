import { useMemo } from 'react';

import { TableCell } from '../../Table';
import { CellProps } from '../types';
import { Typography } from '../../Typography';

export function DataGridCell<T>({
  row,
  cell: { field, renderCell, format, clickCallBack },
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
    <TableCell onClick={handleClickCell}>
      <Typography>{renderCell ? renderCell(row) : formattedValue}</Typography>
    </TableCell>
  );
}
