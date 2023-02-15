import { styled } from '../../../../styles';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { DateCalendarChevronBtn } from '../styles';

export const DateCalendarNextBtnWrapper = styled(DateCalendarChevronBtn)`
  grid-area: ${CalendarGridPositions.next};
`;
