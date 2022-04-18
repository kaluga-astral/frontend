import { styled } from '../../styles';
import { TableBody } from '../../Table';

const TABLE_ROW_HEIGHT = 44;

export const StyledTableBody = styled(TableBody, {
  shouldForwardProp: (prop) =>
    prop !== 'initialized' && prop !== 'minDisplayRows',
})<{ initialized: boolean; minDisplayRows: number }>`
  height: ${({ initialized, minDisplayRows }) =>
    !initialized ? `${TABLE_ROW_HEIGHT * minDisplayRows}px` : 'auto'};
`;
