import { Typography } from '../../../Typography';

import { CellProps } from './types';
import { StyledTableCell } from './styled';

export function DataGridCell<T>({ row, cell }: CellProps<T>) {
  const RenderCell = cell.renderCell;

  if (cell.field === '$action' && !RenderCell) {
    console.warn(`
    [table cell]: table cell must have renderCell props
    `);
  }
  const cellValue = cell.field !== '$action' ? `${row?.[cell.field]}` : '';
  const formattedValue = cell.format ? cell.format(row) : cellValue;

  const handlerClick = (): void =>
    cell.clickCallBack && cell.clickCallBack(row);

  return (
    <StyledTableCell align="left" pointer={cell.pointer} onClick={handlerClick}>
      {RenderCell ? (
        RenderCell(row)
      ) : (
        <Typography width="100%" height="100%">
          {formattedValue}
        </Typography>
      )}
    </StyledTableCell>
  );
}
