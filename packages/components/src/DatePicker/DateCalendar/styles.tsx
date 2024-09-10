import { styled } from '../../styles';

import { CalendarGridPositions } from './enums/calendarGridPositions';

export const DateCalendarWrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(4)};
  grid-template:
    '${CalendarGridPositions.prev} ${CalendarGridPositions.head} ${CalendarGridPositions.next}' auto
    '${CalendarGridPositions.body} ${CalendarGridPositions.body} ${CalendarGridPositions.body}' 1fr
    / 48px 1fr 48px;

  min-width: 288px;
  min-height: 256px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 430px;
    padding: ${({ theme }) => theme.spacing(5, 4)};
  }
`;
