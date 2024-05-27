import { type ReactNode, useMemo } from 'react';

import { type DataGridColumns } from '../types';
import { OverflowTypography } from '../../OverflowTypography';

import { StyledTableCell } from './styles';

export type CellProps<Data extends object> = {
  row: Data;
  cell: DataGridColumns<Data>;
  emptyCellValue?: ReactNode;
};

export function DataGridCell<Data extends object>({
  row,
  cell: { field, renderCell, format, align = 'left' },
  emptyCellValue = '-',
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
    <StyledTableCell align={align}>
      {renderCell && renderCell(row)}
      {!renderCell && (
        <OverflowTypography rowsCount={2}>
          <>{formattedValue}</>
        </OverflowTypography>
      )}
    </StyledTableCell>
  );
}
