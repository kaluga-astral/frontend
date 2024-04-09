import { styled } from '../styles';

export const Wrapper = styled.div<{
  justifyContent?: 'space-between' | 'start';
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;

    .MuiTypography-root {
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;
