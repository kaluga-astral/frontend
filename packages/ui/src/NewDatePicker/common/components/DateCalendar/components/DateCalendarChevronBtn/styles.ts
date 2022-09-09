import { styled } from '../../../../../../styles';
import { DateCalendarBtn } from '../DateCalendarBtn';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';

const DateCalendarChevronBtn = styled(DateCalendarBtn)`
  width: ${({ theme }) => theme.spacing(8)};
  max-width: ${({ theme }) => theme.spacing(8)};
  min-width: ${({ theme }) => theme.spacing(8)};
`;

export const DateCalendarNextBtnWrapper = styled(DateCalendarChevronBtn)`
  grid-area: ${CalendarGridPositions.next};
`;

export const DateCalendarPrevBtnWrapper = styled(DateCalendarChevronBtn)`
  grid-area: ${CalendarGridPositions.prev};
`;
