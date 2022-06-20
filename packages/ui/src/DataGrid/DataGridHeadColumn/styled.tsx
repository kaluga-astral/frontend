import { TableCellProps, TableSortLabelProps } from '@mui/material';
import { CSSProperties } from 'react';

import { styled } from '../../styles';
import { TableCell, TableSortLabel } from '../../Table';

type StyledTableCellProps = TableCellProps & {
  width?: CSSProperties['width'];
  sortable?: boolean;
};

export const StyledTableSortLabel = styled(TableSortLabel)<TableSortLabelProps>`
  visibility: ${({ hideSortIcon }) => hideSortIcon && 'hidden'};
`;

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'width',
})<StyledTableCellProps>`
  width: ${({ width = 'auto' }) => width};

  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'initial')};
  padding: ${({ theme }) => theme.spacing(3, 4)};
  color: ${({ theme }) => theme.palette.grey[700]};
  user-select: none;
`;
