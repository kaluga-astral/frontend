import { styled } from '../../../styles';
import { DAYS_IN_WEEK } from '../../constants/counts';

export const DateDayPickerGridHeadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${DAYS_IN_WEEK}, 1fr);

  color: ${({ theme }) => theme.palette.grey[600]};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  text-align: center;
  text-transform: uppercase;
`;
