import { styled } from '../../../../styles';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { DateCalendarChevronBtn } from '../styles';

export const StyledButton = styled(DateCalendarChevronBtn)`
  grid-area: ${CalendarGridPositions.next};
`;
