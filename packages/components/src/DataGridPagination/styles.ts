import { styled } from '../styles';
import { Typography } from '../Typography';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const Range = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['700']};
`;
