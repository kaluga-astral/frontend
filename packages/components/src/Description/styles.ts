import { styled } from '../styles';

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) =>
    !['$justifyContent', 'as', '$direction'].includes(prop),
})<{
  $justifyContent?: 'space-between' | 'start';
  $direction?: 'default' | 'column' | 'row';
}>`
  overflow: hidden;
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'default' ? 'row' : $direction};
  align-items: baseline;
  justify-content: ${({ $justifyContent }) => $justifyContent};

  margin: 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: ${({ $direction }) =>
      $direction === 'default' ? 'column' : $direction};

    .MuiTypography-root {
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;
