import { useEffect, useMemo, useState } from 'react';

import { TableCell, TableRow } from '../../Table';
import { DataGridCell } from '../DataGridCell';
import { Checkbox } from '../../Checkbox';

import { StyledTableBody } from './styled';
import { DataGridBodyProps } from './types';

export function DataGridBody<T>({
  rows,
  columns,
  selectable,
  onSelectRow,
  selectedRows = [],
  keyId,
}: DataGridBodyProps<T>) {
  // флаг для индикации первой отрисовки компонента
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (rows.length > 0 && !initialized) setInitialized(true);
  }, [rows, initialized]);

  const renderedRows = useMemo(() => {
    return rows.map((row) => {
      const rowId = row[keyId];
      // const checked = selectable ? selectedRows.indexOf(rowId) !== -1 : false;
      const checked =
        selectable &&
        Boolean(
          selectedRows.find((selectedRow) => selectedRow[keyId] === rowId)
        );

      return (
        <TableRow key={rowId}>
          {selectable && (
            <TableCell padding="checkbox">
              <Checkbox checked={checked} onChange={onSelectRow(row)} />
            </TableCell>
          )}
          {columns.map((cell, index) => {
            const cellId = `${rowId}-${index}`;

            return <DataGridCell key={cellId} row={row} cell={cell} />;
          })}
        </TableRow>
      );
    });
  }, [rows, keyId, selectable, selectedRows, onSelectRow, columns]);

  return (
    <StyledTableBody initialized={initialized}>{renderedRows}</StyledTableBody>
  );
}
