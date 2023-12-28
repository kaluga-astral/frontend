import { useContext } from 'react';

import {
  type CommonDateCalendarHeadProps,
  DateCalendarBody,
  DateCalendarGridBtn,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { type PickerProps } from '../types';
import { addMonths } from '../../utils/date';
import { useLocaleDateTimeFormat } from '../hooks/useLocaleDateTimeFormat';
import { ConfigContext } from '../../ConfigProvider';
import { DAYS_IN_WEEK } from '../constants/counts';

import { DateDayPickerGridHead } from './DateDayPickerGridHead';
import { DateDayPickerGridBody } from './DateDayPickerGrid';
import { useDaysGrid } from './hooks/useDaysGrid';

export type MondayFirst = {
  /**
   * @description флаг рендера календаря дней начиная с понедельника
   * @default true
   */
  isMondayFirst?: boolean;
};

type DateDayPickerProps = MondayFirst &
  CommonDateCalendarHeadProps &
  PickerProps;

export const DayPicker = ({
  date: initialDate,
  selectedDate,
  onChange,
  isMondayFirst,
  rangeDate,
  ...headProps
}: DateDayPickerProps) => {
  const monthYearFormat = useLocaleDateTimeFormat({
    month: 'long',
    year: 'numeric',
  });

  const dayFormat = useLocaleDateTimeFormat({
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  });

  const { month: monthCaption } =
    useContext(ConfigContext).datePickerLanguageMap;

  const { baseDate, handlePrevClick, handleNextClick } = useCalendarNavigate({
    date: initialDate,
    addCb: addMonths,
  });

  const { grid } = useDaysGrid({
    baseDate,
    selectedDate,
    isMondayFirst,
    fullSize: true,
    rangeDate,
  });

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle={monthCaption.single}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        headBtnText={monthYearFormat(baseDate)}
      />
      <DateCalendarBody>
        <DateDayPickerGridHead isMondayFirst={isMondayFirst} />
        <DateDayPickerGridBody role="grid">
          {grid.map(({ date, monthDay, ...props }, index) => (
            <DateCalendarGridBtn
              key={index}
              onClick={() => onChange?.(date)}
              title={dayFormat(date)}
              lengthInRow={DAYS_IN_WEEK}
              isPreviousItemInSelectedRange={grid[index - 1]?.isInSelectedRange}
              {...props}
            >
              {monthDay}
            </DateCalendarGridBtn>
          ))}
        </DateDayPickerGridBody>
      </DateCalendarBody>
    </DateCalendarWrapper>
  );
};
