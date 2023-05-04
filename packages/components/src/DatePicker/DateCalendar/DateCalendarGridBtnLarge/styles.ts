import { styled } from '../../../styles';
import { DateCalendarGridBtn } from '../DateCalendarGridBtn';

export const DateCalendarGridBtnLargeWrapper = styled(DateCalendarGridBtn)`
  min-width: 80px;
  min-height: 52px;
  padding: ${({ theme }) => theme.spacing(4, 2)};

  text-transform: capitalize;

  &::after {
    bottom: ${({ theme }) => theme.spacing(2)};
    left: ${({ theme }) => theme.spacing(4)};

    /* по дизайну с каждой стороны отступ по 16px, итого два раза по 16px = 32px */
    width: calc(100% - 32px);
  }
`;
