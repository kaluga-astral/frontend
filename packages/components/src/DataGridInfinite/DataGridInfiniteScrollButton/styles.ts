import { styled } from '../../styles';

export const DataGridInfiniteScrollButtonWrapper = styled.div<{
  vertical: 'top' | 'bottom';
  horizontal: 'right' | 'left';
}>`
  position: fixed;
  ${({ theme, vertical }) =>
    vertical ? vertical + ':' + theme.spacing(4) + ';' : ''}
  ${({ theme, horizontal }) =>
    horizontal ? horizontal + ':' + theme.spacing(6) + ';' : ''}
`;
