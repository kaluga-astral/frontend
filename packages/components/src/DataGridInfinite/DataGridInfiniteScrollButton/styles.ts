import { styled } from '../../styles';

export const DataGridInfiniteScrollButtonWrapper = styled.div<{
  vertical: 'top' | 'bottom';
  horizontal: 'right' | 'left';
}>`
  position: fixed;
  ${({ theme, vertical, horizontal }) =>
    `
    ${vertical ? `${vertical}:${theme.spacing(4)};` : ''}
    ${horizontal ? `${horizontal}:${theme.spacing(6)};` : ''}
    `}
`;
