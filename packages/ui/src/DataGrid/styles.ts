import { TableContainerProps } from '@mui/material';

import { styled } from '../styles';
import { TableContainer } from '../Table';

type StyledTableContainerProps = TableContainerProps & {
  maxHeight?: number;
};

export const DataGridContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledTableContainer = styled(TableContainer, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<StyledTableContainerProps>`
  position: relative;

  max-height: ${({ maxHeight }) => `${maxHeight}px` || 'auto'};
`;
