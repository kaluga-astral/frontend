import { useCallback, useMemo } from 'react';

import { TableCell, TableRow } from '../../Table';
import { DataGridCell } from '../DataGridCell';
import { Checkbox } from '../../Checkbox';

import { StyledTableBody } from './styled';
import { DataGridBodyProps } from './types';

export function DataGridBody<Data>({
  rows,
  columns,
  selectable,
  onRowClick,
  onSelectRow,
  selectedRows = [],
  minDisplayRows,
  keyId,
}: DataGridBodyProps<Data>) {
  const renderCells = useCallback(
    (row: Data, rowId: string) => {
      return columns.map((cell, index) => {
        const cellId = `${rowId}-${index}`;

        return <DataGridCell<Data> key={cellId} row={row} cell={cell} />;
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
      {renderedRows}
    </StyledTableBody>
  );
}
