import { styled } from '../../../../../../styles';
import { DAYS_IN_WEEK } from '../../../../constants/daysInWeek';

export const DateDayPickerGridBody = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: grid;
  grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);
`;
