import { type ReactNode, useMemo } from 'react';

import { OverflowTypography } from '../../OverflowTypography';
import { type TableCellProps } from '../../Table';
import { type DataGridColumns } from '../types';

import { StyledTableCell } from './styles';

export type CellProps<TData extends object> = TableCellProps & {
  row: TData;
  cell: DataGridColumns<TData>;
  emptyCellValue?: ReactNode;
};

export const DataGridCell = <TData extends object>({
  row,
  cell: { field, renderCell, format, align = 'left' },
  emptyCellValue = '-',
  isDisabled,
}: CellProps<TData>) => {
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
