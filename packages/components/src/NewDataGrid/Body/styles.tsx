import { styled } from '../../styles';
import { MIN_ROW_HEIGHT } from '../constants';

export const Wrapper = styled('ul', {
  shouldForwardProp: (prop) =>
    prop !== '$isEmpty' && prop !== '$minDisplayRows',
})<{ $isEmpty: boolean; $minDisplayRows: number }>`
  height: ${({ $isEmpty, $minDisplayRows }) =>
    $isEmpty ? `${MIN_ROW_HEIGHT * $minDisplayRows}px` : '100%'};
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
