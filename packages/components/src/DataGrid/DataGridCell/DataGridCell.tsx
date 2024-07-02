import { type ReactNode, useMemo } from 'react';

import { OverflowTypography } from '../../OverflowTypography';
import { type TableCellProps } from '../../Table';
import { type DataGridColumns } from '../types';

import { StyledTableCell } from './styles';

export type CellProps<Data extends object> = TableCellProps & {
  row: Data;
  cell: DataGridColumns<Data>;
  emptyCellValue?: ReactNode;
};

export const DataGridCell = <Data extends object>({
  row,
  cell: { field, renderCell, format, align = 'left' },
  emptyCellValue = '-',
  isDisabled,
}: CellProps<Data>) => {
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
    <StyledTableCell isDisabled={isDisabled} align={align}>
      {renderCell && renderCell(row)}
      {!renderCell && (
        <OverflowTypography rowsCount={2}>
          <>{formattedValue}</>
        </OverflowTypography>
      )}
    </StyledTableCell>
  );
};
