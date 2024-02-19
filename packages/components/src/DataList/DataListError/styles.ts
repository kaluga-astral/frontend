import { styled } from '../../styles';

export const DataListErrorRoot = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing(5)};
`;
