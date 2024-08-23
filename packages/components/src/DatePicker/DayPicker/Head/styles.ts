import { styled } from '../../../styles';
import { DAYS_IN_WEEK } from '../../../utils/date';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);

  font-size: ${({ theme }) => theme.typography.small.fontSize};
  color: ${({ theme }) => theme.palette.grey[600]};
  text-align: center;
  text-transform: uppercase;
`;
