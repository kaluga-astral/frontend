import { TableContainerProps } from '@mui/material';

import { Pagination } from '../Pagination';
import { styled } from '../styles';
import { TableContainer } from '../Table';

type StyledTableContainerProps = TableContainerProps & {
  maxHeight?: number;
};

export const StyledPagination = styled(Pagination)`
  border-top: 2px solid ${({ theme }) => theme.palette.grey['300']};
`;

export const DataGridContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledTableContainer = styled(TableContainer, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<StyledTableContainerProps>`
  max-height: ${({ maxHeight }) => `${maxHeight}px` || 'auto'};
`;
