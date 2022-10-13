import { styled } from '../../styles';

import { CalendarGridPositions } from './enums/calendarGridPositions';

export const DateCalendarWrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(4)};
  grid-template:
    '${CalendarGridPositions.prev} ${CalendarGridPositions.head} ${CalendarGridPositions.next}' auto
    '${CalendarGridPositions.body} ${CalendarGridPositions.body} ${CalendarGridPositions.body}' 1fr
    / 32px 1fr 32px;
  width: 288px;
  height: 256px;
`;
