import { TableCellProps } from '@mui/material';
import { CSSProperties } from 'react';

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
  width: ${({ width = 'auto' }) => width};
  padding: ${({ theme }) => theme.spacing(3, 4)};

  color: ${({ theme }) => theme.palette.grey[700]};

  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'initial')};

  user-select: none;
`;

export const TableCellTitle = styled(Typography)`
  display: flex;
  align-items: center;

  > svg {
    width: 16px;
    height: 16px;
  }
`;
