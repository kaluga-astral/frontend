import { styled } from '../../styles';

export const DataListNoDataRoot = styled.li`
  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing(3, 5)};

  list-style-type: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;
