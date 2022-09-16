import { styled } from '../../styles';
import { TableBody } from '../../Table';

const TABLE_ROW_HEIGHT = 44;

export const StyledTableBody = styled(TableBody, {
  shouldForwardProp: (prop) => prop !== 'empty' && prop !== 'minDisplayRows',
})<{ empty: boolean; minDisplayRows: number }>`
  position: relative;

  height: ${({ empty, minDisplayRows }) =>
    empty ? `${TABLE_ROW_HEIGHT * minDisplayRows}px` : 'auto'};
`;
