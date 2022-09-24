import {
  CommonDateCalendarHeadProps,
  DateCalendarBody,
  DateCalendarGridBtn,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../../hooks/useCalendarNavigate';
import { PickerProps } from '../../types/pickerProps';
import { addMonths } from '../../utils/addMonths';
import { useLocaleDateTimeFormat } from '../../hooks/useLocaleDateTimeFormat';

import { DateDayPickerGridHead } from './components/DateDayPickerGridHead';
import { DateDayPickerGridBody } from './components/DateDayPickerGrid';
import { useDaysGrid } from './hooks/useDaysGrid';

type DateDayPickerProps = {
  isMondayFirst?: boolean;
} & CommonDateCalendarHeadProps &
  PickerProps;

export const DayPicker = ({
  date: initialDate,
  selectedDate,
  onChange,
  isMondayFirst,
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

  const { baseDate, handlePrevClick, handleNextClick } = useCalendarNavigate({
    date: initialDate,
    addCb: addMonths,
  });

  const { grid, isPrevDisabled, isNextDisabled } = useDaysGrid({
    baseDate,
    selectedDate,
    isMondayFirst,
  });

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle="месяц"
        onPrevClick={!isPrevDisabled ? handlePrevClick : undefined}
        onNextClick={!isNextDisabled ? handleNextClick : undefined}
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
