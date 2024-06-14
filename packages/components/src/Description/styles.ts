import { styled } from '../styles';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== '$justifyContent' && prop !== '$leader',
})<{
  $justifyContent?: 'space-between' | 'start';
  $leader?: boolean;
}>`
  display: flex;
  align-items: baseline;
  justify-content: ${({ $justifyContent }) => $justifyContent};

  text-align: ${({ $leader }) => ($leader ? 'right' : 'left')};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;

    .MuiTypography-root {
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;
