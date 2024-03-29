import { type TableContainerProps } from '@mui/material';

import { styled } from '../styles';
import { TableContainer } from '../Table';

type StyledTableContainerProps = TableContainerProps & {
  maxHeight?: number;
  inert?: '' | false;
};

export const Container = styled.div<StyledTableContainerProps>`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'initial')};
`;

export const StyledTableContainer = styled(TableContainer, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<StyledTableContainerProps>`
  height: 100%;
`;

export const DisabledTableContainer = styled(StyledTableContainer)`
  pointer-events: none;

  background: ${({ theme }) => theme.palette.background.element};
  mix-blend-mode: luminosity;
`;
