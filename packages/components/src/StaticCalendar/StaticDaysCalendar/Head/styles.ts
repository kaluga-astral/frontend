import { styled } from '../../../styles';
import { DAYS_IN_WEEK } from '../../../constants';

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);

  font-size: ${({ theme }) => theme.typography.small.fontSize};
  color: ${({ theme }) => theme.palette.grey[600]};
  text-align: center;
  text-transform: uppercase;
`;
