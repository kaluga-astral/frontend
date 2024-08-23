import { styled } from '../../../styles';
import { CalendarGridPositions } from '../enums/calendarGridPositions';
import { ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID } from '../../constants';
import { StaticDaysCalendar } from '../../../StaticCalendar';

export const StaticDaysCalendarWrapper = styled(StaticDaysCalendar)`
  grid-area: ${CalendarGridPositions.body};
`;

export const DateCalendarGridLarge = styled('article')`
  display: grid;
  grid-area: ${CalendarGridPositions.body};
  grid-template-columns: repeat(${ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID}, 1fr);
`;
