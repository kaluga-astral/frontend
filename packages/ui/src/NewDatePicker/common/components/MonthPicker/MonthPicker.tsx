import {
  CommonDateCalendarHeadProps,
  DateCalendarGridBtnLarge,
  DateCalendarGridLarge,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../../hooks/useCalendarNavigate';
import { PickerProps } from '../../types/pickerProps';
import { addYears } from '../../utils/addYears';
import { useLocaleDateTimeFormat } from '../../hooks/useLocaleDateTimeFormat';

import { useMonthsGrid } from './hooks/buildMonthsGrid';

type DateMonthPickerProps = PickerProps & CommonDateCalendarHeadProps;

export const MonthPicker = ({
  date: initialDate,
  selectedDate,
  onChange,
  ...headProps
}: DateMonthPickerProps) => {
  const monthFormat = useLocaleDateTimeFormat({
    month: 'long',
  });

  const titleFormat = useLocaleDateTimeFormat({
    month: 'long',
    year: 'numeric',
  });

  const { baseDate, handlePrevClick, handleNextClick } = useCalendarNavigate({
    date: initialDate,
    addCb: addYears,
  });

  const { grid, isPrevDisabled, isNextDisabled } = useMonthsGrid({
    baseDate,
    selectedDate,
  });

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle="год"
        onPrevClick={!isPrevDisabled ? handlePrevClick : undefined}
        onNextClick={!isNextDisabled ? handleNextClick : undefined}
        headBtnText={baseDate.getUTCFullYear()}
      />
      <DateCalendarGridLarge>
        {grid.map(({ month, date, ...props }, index) => (
          <DateCalendarGridBtnLarge
            key={`${month}_${index}`}
            onClick={() => onChange?.(date)}
            title={titleFormat(date)}
            {...props}
          >
            {monthFormat(date)}
          </DateCalendarGridBtnLarge>
        ))}
      </DateCalendarGridLarge>
    </DateCalendarWrapper>
  );
};
