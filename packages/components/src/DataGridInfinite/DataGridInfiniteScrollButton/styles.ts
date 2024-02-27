import { styled } from '../../styles';

export const DataGridInfiniteScrollButtonWrapper = styled.div<{
  vertical?: 'top' | 'bottom';
  horizontal?: 'right' | 'left';
}>`
  position: fixed;
  ${({ theme, vertical = 'bottom', horizontal = 'right' }) =>
    `
    ${vertical === 'top' ? 'top' : 'bottom'}: ${
      vertical === 'top' ? theme.spacing(16) : theme.spacing(4)
    };

   ${horizontal}: ${theme.spacing(6)};

    `}
`;
