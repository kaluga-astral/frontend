import { styled } from '../../../../../../styles';
import { DAYS_IN_WEEK } from '../../../../constants/daysInWeek';

export const DateDayPickerGridHeadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);
  text-align: center;
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  color: ${({ theme }) => theme.palette.grey[600]};
  text-transform: uppercase;
`;
