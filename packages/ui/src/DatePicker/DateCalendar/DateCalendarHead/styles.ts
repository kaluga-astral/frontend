import { styled } from '../../../styles';
import { DateCalendarBtn } from '../DateCalendarBtn';
import { CalendarGridPositions } from '../enums/calendarGridPositions';
import { Typography } from '../../../Typography';

export const DateCalendarHeadBtn = styled(DateCalendarBtn)`
  display: block;
  grid-area: ${CalendarGridPositions.head};

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const DateCalendarHeadText = styled(Typography)`
  display: block;
  grid-area: ${CalendarGridPositions.head};
  align-self: center;

  text-align: center;

  &::first-letter {
    text-transform: capitalize;
  }
`;
