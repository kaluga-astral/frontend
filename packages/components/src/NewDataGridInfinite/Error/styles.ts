import { styled } from '../../styles';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content max-content;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-items: center;

  padding: ${({ theme }) => theme.spacing(3, 5)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: ${({ theme }) => theme.spacing(4)};
    justify-items: normal;

    padding: ${({ theme }) => theme.spacing(4)};
  }
`;
