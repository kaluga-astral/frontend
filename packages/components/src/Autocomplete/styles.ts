import { styled } from '../styles';
import { Paper } from '../Paper';

export const PopperWrapper = styled(Paper)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(6, 0, 6, 3)};
`;
