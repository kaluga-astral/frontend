import { styled } from '../../styles';

export const DataListLoaderRoot = styled.li`
  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing(5)};

  list-style-type: none;
`;
