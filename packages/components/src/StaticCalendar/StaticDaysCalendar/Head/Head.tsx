import { memo } from 'react';

import { Wrapper } from './styles';

const WORKDAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ'];

const MONDAY_FIRST_WEEKDAYS = [...WORKDAYS, 'СБ', 'ВС'];

const SUNDAY_FIRST_WEEKDAYS = ['ВС', ...WORKDAYS, 'СБ'];

type DateCalendarMonthGridHeadProps = {
  isMondayFirst?: boolean;
};

export const Head = memo(
  ({ isMondayFirst = true }: DateCalendarMonthGridHeadProps) => (
    <Wrapper role="rowheader">
      {(isMondayFirst ? MONDAY_FIRST_WEEKDAYS : SUNDAY_FIRST_WEEKDAYS).map(
        (weekday, index) => (
          <span key={index} role="cell">
            {weekday}
          </span>
        ),
      )}
    </Wrapper>
  ),
);

Head.displayName = 'DateDayPickerGridHead';
