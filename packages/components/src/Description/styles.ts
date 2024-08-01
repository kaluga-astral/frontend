import { styled } from '../styles';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== '$justifyContent' && prop !== 'as' && prop !== '$mobileDirection',
})<{
  $justifyContent?: 'space-between' | 'start';
  $mobileDirection?: 'column' | 'row';
}>`
  display: flex;
  align-items: baseline;
  justify-content: ${({ $justifyContent }) => $justifyContent};

  margin: 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: ${({ $mobileDirection }) => $mobileDirection};

    .MuiTypography-root {
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;
