import { styled } from '../../../styles';
import { DateCalendarButton } from '../DateCalendarButton';
import { CalendarGridPositions } from '../enums/calendarGridPositions';
import { Typography } from '../../../Typography';

export const HeadButton = styled(DateCalendarButton)`
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
