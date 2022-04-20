import { TableCellProps, TableSortLabelProps } from '@mui/material';

import { styled } from '../../styles';
import { TableCell, TableSortLabel } from '../../Table';

type StyledTableCellProps = TableCellProps & {
  fitContent?: boolean;
};

export const StyledTableSortLabel = styled(TableSortLabel)<TableSortLabelProps>`
  visibility: ${({ hideSortIcon }) => hideSortIcon && 'hidden'};
`;

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'fitContent',
})<StyledTableCellProps>`
  width: ${({ fitContent }) => (fitContent ? '1%' : 'auto')};

  cursor: pointer;

  user-select: none;
`;
