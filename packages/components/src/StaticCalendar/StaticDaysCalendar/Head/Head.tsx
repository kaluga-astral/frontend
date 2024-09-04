import { memo } from 'react';

import { Typography } from '../../../Typography';

import { Wrapper } from './styles';

const WORKDAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ'];

const MONDAY_FIRST_WEEKDAYS = [...WORKDAYS, 'СБ', 'ВС'];

const SUNDAY_FIRST_WEEKDAYS = ['ВС', ...WORKDAYS, 'СБ'];

type DateCalendarMonthGridHeadProps = {
  isMondayFirst?: boolean;
  hasHolidays?: boolean;
};

const MONDAY_FIRST_HOLIDAYS: Set<number> = new Set([5, 6]);
const SUNDAY_FIRST_HOLIDAYS: Set<number> = new Set([0, 6]);

export const Head = memo(
  ({ isMondayFirst = true, hasHolidays }: DateCalendarMonthGridHeadProps) => {
    const holidaysSet = isMondayFirst
      ? MONDAY_FIRST_HOLIDAYS
      : SUNDAY_FIRST_HOLIDAYS;

    return (
      <Wrapper role="rowheader">
        {(isMondayFirst ? MONDAY_FIRST_WEEKDAYS : SUNDAY_FIRST_WEEKDAYS).map(
          (weekday, index) => (
            <Typography
              key={index}
              color={hasHolidays && holidaysSet.has(index) ? 'error' : 'grey'}
              role="cell"
            >
              {weekday}
            </Typography>
          ),
        )}
      </Wrapper>
    );
  },
);

Head.displayName = 'DateDayPickerGridHead';
