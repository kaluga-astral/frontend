import { useMemo } from 'react';

import { TableCell } from '../../Table';
import { Typography } from '../../Typography';
import { DataGridColumns } from '../types';

export type CellProps<Data> = {
  row: Data;
  cell: DataGridColumns<Data>;
};

export function DataGridCell<Data>({
  row,
  cell: { field, renderCell, format, align = 'left', emptyCellValue = '-' },
}: CellProps<Data>) {
  const formattedValue = useMemo(() => {
    if (format) {
      return format(row);
    }

    if (field) {
      return row[field];
    }

    return emptyCellValue;
  }, [field, format, row, emptyCellValue]);

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
