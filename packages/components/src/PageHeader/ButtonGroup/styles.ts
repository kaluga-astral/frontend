import { styled } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  grid-area: actions;
  gap: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;
