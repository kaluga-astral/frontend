import { styled } from '../../../../../../styles';
import { DateCalendarBtn } from '../DateCalendarBtn';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { Typography } from '../../../../../../Typography';

export const DateCalendarHeadBtn = styled(DateCalendarBtn)`
  grid-area: ${CalendarGridPositions.head};
`;

export const DateCalendarHeadText = styled(Typography)`
  grid-area: ${CalendarGridPositions.head};
  align-self: center;

  text-align: center;
`;
