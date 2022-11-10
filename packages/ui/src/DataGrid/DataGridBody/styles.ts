import { styled } from '../../styles';
import { TableBody } from '../../Table';

const TABLE_ROW_HEIGHT = 44;

export const StyledTableBody = styled(TableBody, {
  shouldForwardProp: (prop) => prop !== 'empty' && prop !== 'minDisplayRows',
})<{ empty: boolean; minDisplayRows: number }>`
  height: ${({ empty, minDisplayRows }) =>
    empty ? `${TABLE_ROW_HEIGHT * minDisplayRows}px` : '100%'};

  /* Без этого в FF не применяется height */
  &::after {
    content: '';
  }
`;
