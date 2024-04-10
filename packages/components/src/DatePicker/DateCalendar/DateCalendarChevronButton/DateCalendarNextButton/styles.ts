import { styled } from '../../../../styles';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { StyledDateCalendarButton } from '../styles';

export const StyledButton = styled(StyledDateCalendarButton)`
  grid-area: ${CalendarGridPositions.next};
`;
