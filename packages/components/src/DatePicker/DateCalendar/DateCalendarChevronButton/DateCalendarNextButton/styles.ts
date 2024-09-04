import { styled } from '../../../../styles';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { StaticCalendarButton } from '../../../../StaticCalendar/StaticCalendarButton';

export const Wrapper = styled(StaticCalendarButton)`
  grid-area: ${CalendarGridPositions.next};
`;
