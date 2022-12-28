import { styled } from '../../../../styles';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { DateCalendarChevronBtn } from '../styles';

export const DateCalendarPrevBtnWrapper = styled(DateCalendarChevronBtn)`
  grid-area: ${CalendarGridPositions.prev};
`;
