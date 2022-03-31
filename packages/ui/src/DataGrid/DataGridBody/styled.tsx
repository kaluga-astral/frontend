import { styled } from '../../styles';
import { TableBody } from '../../Table';

export const StyledTableBody = styled(TableBody, {
  shouldForwardProp: (prop) => prop !== 'initialized',
})<{ initialized: boolean }>`
  height: ${({ initialized }) => (!initialized ? '440px' : 'auto')};
`;
