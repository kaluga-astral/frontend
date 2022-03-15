import { PaginationItem } from '@mui/material';

import { styled } from '../styles';

export const StyledPaginationItem = styled(PaginationItem)`
  &.Mui-selected {
    background-color: ${({ theme }) => theme.palette.grey['900']} !important;
  }
`;
