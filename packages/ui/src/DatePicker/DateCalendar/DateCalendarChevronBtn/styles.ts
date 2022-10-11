import { styled } from '../../../styles';
import { DateCalendarBtn } from '../DateCalendarBtn';
import { CalendarGridPositions } from '../enums/calendarGridPositions';

const DateCalendarChevronBtn = styled(DateCalendarBtn)`
  width: 32px;
  min-width: 32px;
  max-width: 32px;
`;

export const DateCalendarNextBtnWrapper = styled(DateCalendarChevronBtn)`
  grid-area: ${CalendarGridPositions.next};
`;

export const DateCalendarPrevBtnWrapper = styled(DateCalendarChevronBtn)`
  grid-area: ${CalendarGridPositions.prev};
`;
