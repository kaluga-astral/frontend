import { TableBody, TableCell, TableRow } from '../../Table';
import { DataGridCell } from '../DataGridCell';
import { Checkbox } from '../../Checkbox';
import { DataGridBodyProps } from '../types';

export function DataGridBody<T>({
  data,
  columns,
  selectable,
  onSelectRow,
  selectedRows = [],
  keyId,
}: DataGridBodyProps<T>) {
  return (
    <TableBody>
      {data.map((row) => {
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
    </TableBody>
  );
}
