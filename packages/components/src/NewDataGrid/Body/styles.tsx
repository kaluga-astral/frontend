import { styled } from '../../styles';
import { ROW_HEIGHT } from '../constants';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== '$isEmpty' && prop !== '$minDisplayRows',
})<{ $isEmpty: boolean; $minDisplayRows: number }>`
  height: ${({ $isEmpty, $minDisplayRows }) =>
    $isEmpty ? `${ROW_HEIGHT * $minDisplayRows}px` : '100%'};
`;
