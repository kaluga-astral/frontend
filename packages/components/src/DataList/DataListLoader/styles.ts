import { styled } from '../../styles';

export const Item = styled.li`
  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing(2.5, 5)};

  list-style-type: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${({ theme }) => theme.spacing(3, 4)};
  }
`;
