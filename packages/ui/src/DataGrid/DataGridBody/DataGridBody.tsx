import { useEffect, useState } from 'react';

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
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (rows.length > 0 && !initialized) setInitialized(true);
  }, [rows]);

  return (
    <StyledTableBody initialized={initialized}>
      {rows.map((row) => {
        const rowId = row[keyId];
        const checked = selectable ? selectedRows.indexOf(rowId) !== -1 : false;

        return (
          <TableRow key={rowId}>
            {selectable && (
              <TableCell padding="checkbox">
                <Checkbox
                  checked={checked}
                  onChange={onSelectRow(row[keyId])}
                />
              </TableCell>
            )}
            {columns.map((cell, index) => {
              const cellId = `${rowId}-${index}`;

              return <DataGridCell key={cellId} row={row} cell={cell} />;
            })}
          </TableRow>
        );
      })}
    </StyledTableBody>
  );
}
