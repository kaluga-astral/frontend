import { styled } from '../../styles';
import { DAYS_IN_WEEK } from '../../constants';

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);

  margin-top: ${({ theme }) => theme.spacing(2)};
`;
