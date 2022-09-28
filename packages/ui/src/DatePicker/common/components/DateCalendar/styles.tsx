import { styled } from '../../../../styles';

import { CalendarGridPositions } from './enums/calendarGridPositions';

export const DateCalendarWrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(4)};
  grid-template:
    '${CalendarGridPositions.prev} ${CalendarGridPositions.head} ${CalendarGridPositions.next}' auto
    '${CalendarGridPositions.body} ${CalendarGridPositions.body} ${CalendarGridPositions.body}' 1fr
    / ${({ theme }) => theme.spacing(8)} 1fr ${({ theme }) => theme.spacing(8)};
`;
