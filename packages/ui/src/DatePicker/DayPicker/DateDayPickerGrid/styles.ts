import { styled } from '../../../styles';
import { DAYS_IN_WEEK } from '../../constants/counts';

export const DateDayPickerGridBody = styled.div`
  display: grid;
  grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);

  margin-top: ${({ theme }) => theme.spacing(2)};
`;
