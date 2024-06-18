import { styled } from '../styles';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== '$justifyContent' && prop !== 'as',
})<{
  $justifyContent?: 'space-between' | 'start';
}>`
  display: flex;
  align-items: baseline;
  justify-content: ${({ $justifyContent }) => $justifyContent};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;

    .MuiTypography-root {
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;
