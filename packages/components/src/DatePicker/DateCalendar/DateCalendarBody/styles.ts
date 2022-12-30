import { styled } from '../../../styles';
import { CalendarGridPositions } from '../enums/calendarGridPositions';
import { ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID } from '../../constants/counts';

export const DateCalendarBody = styled.article`
  grid-area: ${CalendarGridPositions.body};
`;

export const DateCalendarGridLarge = styled(DateCalendarBody)`
  display: grid;
  grid-template-columns: repeat(${ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID}, 1fr);
`;
