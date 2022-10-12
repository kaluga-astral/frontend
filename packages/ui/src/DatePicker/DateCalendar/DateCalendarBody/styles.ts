import { styled } from '../../../styles';
import { CalendarGridPositions } from '../enums/calendarGridPositions';

export const DateCalendarBody = styled.article`
  grid-area: ${CalendarGridPositions.body};
`;

export const DateCalendarGridLarge = styled(DateCalendarBody)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
