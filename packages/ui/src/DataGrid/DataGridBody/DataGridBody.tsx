import { ChangeEvent, ReactNode, useCallback, useMemo } from 'react';

import { TableCell, TableRow } from '../../Table';
import { DataGridCell } from '../DataGridCell';
import { Checkbox } from '../../Checkbox';
import { DataGridColumns, DataGridRow } from '../types';

import { StyledTableBody } from './styles';

export type DataGridBodyProps<Data extends object> = {
  columns: DataGridColumns<Data>[];
  keyId: keyof DataGridRow;
  onRowClick?: (row: Data) => void;
  selectable?: boolean;
  selectedRows?: Array<Data>;
  rows: Data[];
  onSelectRow: (row: Data) => (event: ChangeEvent<HTMLInputElement>) => void;
  minDisplayRows: number;
  emptyCellValue?: ReactNode;
  noDataPlaceholder?: ReactNode;
};

export function DataGridBody<Data extends object>({
  rows,
  columns,
  selectable,
  onRowClick,
  onSelectRow,
  selectedRows = [],
  minDisplayRows,
  keyId,
  emptyCellValue,
  noDataPlaceholder,
}: DataGridBodyProps<Data>) {
  const renderCells = useCallback(
    (row: Data, rowId: string) => {
      return columns.map((cell, index) => {
        const cellId = `${rowId}-${index}`;

        return (
          <DataGridCell<Data>
            key={cellId}
            row={row}
            cell={cell}
            emptyCellValue={emptyCellValue}
          />
        );
      });
    },
    [columns],
  );

  const handleRowClick = (row: Data) => () => {
    if (onRowClick) {
      onRowClick(row);
    }
  };

  const renderedRows = useMemo(() => {
    return rows.map((row) => {
      const rowId: string = row[keyId];
      const checked =
        selectable &&
        Boolean(
          selectedRows.find((selectedRow) => selectedRow[keyId] === rowId),
        );

      return (
        <TableRow
          key={rowId}
          hover={Boolean(onRowClick)}
          onClick={handleRowClick(row)}
        >
          {selectable && (
            <TableCell
              padding="checkbox"
              onClick={(event) => event.stopPropagation()}
            >
              <Checkbox checked={checked} onChange={onSelectRow(row)} />
            </TableCell>
          )}
          {renderCells(row, rowId)}
        </TableRow>
      );
    });
  }, [rows, keyId, selectable, selectedRows, onSelectRow, onRowClick, columns]);

  return (
    <StyledTableBody empty={!rows.length} minDisplayRows={minDisplayRows}>
      {rows.length ? renderedRows : noDataPlaceholder}
    </StyledTableBody>
  );
}
