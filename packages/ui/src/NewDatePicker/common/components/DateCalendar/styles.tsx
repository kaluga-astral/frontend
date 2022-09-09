import { styled } from '../../../../styles';

import { CalendarGridPositions } from './enums/calendarGridPositions';

export const DateCalendarWrapper = styled.div`
  display: grid;
  grid-template-areas: '${CalendarGridPositions.prev} ${CalendarGridPositions.head} ${CalendarGridPositions.next}' '${CalendarGridPositions.body} ${CalendarGridPositions.body} ${CalendarGridPositions.body}';
  grid-template-columns: ${({ theme }) => theme.spacing(8)} 1fr ${({ theme }) =>
      theme.spacing(8)};
  grid-template-rows: auto 1fr;
  grid-gap: ${({ theme }) => theme.spacing(4)};
`;
