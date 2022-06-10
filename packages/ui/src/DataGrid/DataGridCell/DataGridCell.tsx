import { useMemo } from 'react';

import { TableCell } from '../../Table';
import { Typography } from '../../Typography';

import { CellProps } from './types';

export function DataGridCell<Data>({
  row,
  cell: { field, renderCell, format, align = 'left' },
}: CellProps<Data>) {
  const formattedValue = useMemo(() => {
    if (format) {
      return format(row);
    }

    if (field) {
      return row[field];
    }

    return 'Нет данных';
  }, [field, format, row]);

  return (
    <TableCell align={align}>
      {renderCell && renderCell(row)}
      {!renderCell && (
        <Typography>
          <>{formattedValue}</>
        </Typography>
      )}
    </TableCell>
  );
}
