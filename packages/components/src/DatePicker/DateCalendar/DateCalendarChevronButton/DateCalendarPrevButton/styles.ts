import { PreviousOutlineMd } from '@astral/icons';

import { styled } from '../../../../styles';
import { CalendarGridPositions } from '../../enums/calendarGridPositions';
import { StaticCalendarButton } from '../../../../StaticCalendar';

export const Wrapper = styled(StaticCalendarButton)`
  grid-area: ${CalendarGridPositions.prev};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0;
  }
`;

export const PrevIcon = styled(PreviousOutlineMd)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 32px;
    height: 32px;
  }
`;
