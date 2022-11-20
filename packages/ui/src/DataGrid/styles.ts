import { TableContainerProps } from '@mui/material';

import { styled } from '../styles';
import { TableContainer } from '../Table';

type StyledTableContainerProps = TableContainerProps & {
  maxHeight?: number;
};

export const DataGridContainer = styled.div<StyledTableContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'initial')};
  overflow: hidden;
`;

export const StyledTableContainer = styled(TableContainer, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<StyledTableContainerProps>`
  height: 100%;
`;
