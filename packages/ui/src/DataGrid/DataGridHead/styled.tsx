import { TableSortLabelProps } from '@mui/material';

import { styled } from '../../styles';
import { TableCell, TableSortLabel } from '../../Table';

export const StyledTableSortLabel = styled(TableSortLabel)<TableSortLabelProps>`
  visibility: ${({ hideSortIcon }) => hideSortIcon && 'hidden'};
`;

export const StyledTableCell = styled(TableCell)`
  cursor: pointer;

  user-select: none;
`;
