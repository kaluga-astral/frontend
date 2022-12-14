import { useContext } from 'react';

import {
  CommonDateCalendarHeadProps,
  DateCalendarGridBtnLarge,
  DateCalendarGridLarge,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { PickerProps } from '../types';
import { addYears } from '../../utils/date';
import { useLocaleDateTimeFormat } from '../hooks/useLocaleDateTimeFormat';
import { ConfigContext } from '../../ConfigProvider';

import { useMonthsGrid } from './hooks/useMonthsGrid';

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

  const { year: yearCaption } = useContext(ConfigContext).datePickerLanguageMap;

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle={yearCaption.single}
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
