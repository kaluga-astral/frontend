import { styled } from '../../../../styles';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { StaticCalendarButton } from '../../../../StaticCalendar';

export const Wrapper = styled(StaticCalendarButton)`
  grid-area: ${CalendarGridPositions.next};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0;
  }
`;
