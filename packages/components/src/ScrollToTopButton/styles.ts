import { styled } from '../styles';

export const ButtonWrapper = styled.div<{
  vertical?: 'top' | 'bottom';
  horizontal?: 'right' | 'left';
}>`
  position: absolute;
  ${({ theme, vertical = 'bottom', horizontal = 'right' }) =>
    `
      ${vertical}: ${vertical === 'top' ? theme.spacing(16) : theme.spacing(7)};
      ${horizontal}: ${theme.spacing(9)};
    `}
`;
