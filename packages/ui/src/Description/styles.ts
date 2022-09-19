import { styled } from '../styles';

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;

    .MuiTypography-root {
      font-size: ${({ theme }) => theme.typography.fontSize};
    }
  }
`;
