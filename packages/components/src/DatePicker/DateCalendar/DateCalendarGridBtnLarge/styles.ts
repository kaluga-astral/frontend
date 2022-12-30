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

    width: calc(100% - 32px);
  }
`;
