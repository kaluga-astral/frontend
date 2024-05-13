import { type TableCellProps } from '@mui/material';
import { type CSSProperties } from 'react';

import { styled } from '../../styles';
import { TableCell } from '../../Table';
import { Typography } from '../../Typography';

type StyledTableCellProps = TableCellProps & {
  width?: CSSProperties['width'];
  sortable?: boolean;
};

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'sortable',
})<StyledTableCellProps>`
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'initial')};
  user-select: none;

  width: ${({ width = 'auto' }) => width};
  padding: ${({ theme }) => theme.spacing(3, 2)};

  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const TableCellTitle = styled(Typography)`
  display: flex;
  align-items: center;

  > svg {
    width: 16px;
    height: 16px;
  }
`;
