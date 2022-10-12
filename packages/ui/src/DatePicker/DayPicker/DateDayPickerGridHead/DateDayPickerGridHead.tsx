import { memo } from 'react';

import { DateDayPickerGridHeadWrapper } from './styles';

const WORKDAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ'];

const MONDAY_FIRST_WEEKDAYS = [...WORKDAYS, 'СБ', 'ВС'];

const SUNDAY_FIRST_WEEKDAYS = ['ВС', ...WORKDAYS, 'СБ'];

type DateCalendarMonthGridHeadProps = {
  isMondayFirst?: boolean;
};

export const DateDayPickerGridHead = memo(
  ({ isMondayFirst = false }: DateCalendarMonthGridHeadProps) => (
    <DateDayPickerGridHeadWrapper role="rowheader">
      {(isMondayFirst ? SUNDAY_FIRST_WEEKDAYS : MONDAY_FIRST_WEEKDAYS).map(
        (weekday, index) => (
          <span key={index} role="cell">
            {weekday}
          </span>
        ),
      )}
    </DateDayPickerGridHeadWrapper>
  ),
);

DateDayPickerGridHead.displayName = 'DateDayPickerGridHead';
