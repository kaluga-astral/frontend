import { useCallback, useMemo } from 'react';

import { TableCell, TableRow } from '../../Table';
import { DataGridCell } from '../DataGridCell';
import { Checkbox } from '../../Checkbox';

import { StyledTableBody } from './styled';
import { DataGridBodyProps } from './types';

export function DataGridBody<T>({
  rows,
  columns,
  selectable,
  onRowClick,
  onSelectRow,
  selectedRows = [],
  minDisplayRows,
  keyId,
}: DataGridBodyProps<T>) {
  const renderCells = useCallback(
    (row: T, rowId: string) => {
      return columns.map((cell, index) => {
        const cellId = `${rowId}-${index}`;

        return <DataGridCell key={cellId} row={row} cell={cell} />;
      });
    },
    [columns]
  );

  const handleRowClick = (row: T) => () => {
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
          selectedRows.find((selectedRow) => selectedRow[keyId] === rowId)
        );

      return (
        <TableRow
          key={rowId}
          hover={Boolean(onRowClick)}
          onClick={handleRowClick(row)}
        >
          {selectable && (
            <TableCell padding="checkbox">
              <Checkbox checked={checked} onChange={onSelectRow(row)} />
            </TableCell>
          )}
          {renderCells(row, rowId)}
        </TableRow>
      );
    });
  }, [rows, keyId, selectable, selectedRows, onSelectRow, columns]);

  return (
    <StyledTableBody empty={!rows.length} minDisplayRows={minDisplayRows}>
      {renderedRows}
    </StyledTableBody>
  );
}
