import { styled } from '../../../styles';
import { CalendarGridPositions } from '../enums/calendarGridPositions';
import { Typography } from '../../../Typography';
import { StaticCalendarButton } from '../../../StaticCalendar/StaticCalendarButton';

export const HeadButton = styled(StaticCalendarButton)`
  display: block;
  grid-area: ${CalendarGridPositions.head};

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const HeadText = styled(Typography)`
  display: block;
  grid-area: ${CalendarGridPositions.head};
  align-self: center;

  text-align: center;

  &::first-letter {
    text-transform: capitalize;
  }
`;
