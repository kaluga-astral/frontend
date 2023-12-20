import { useContext } from 'react';

import {
  type CommonDateCalendarHeadProps,
  DateCalendarGridBtnLarge,
  DateCalendarGridLarge,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { type PickerProps } from '../types';
import { addYears } from '../../utils/date';
import { useLocaleDateTimeFormat } from '../hooks/useLocaleDateTimeFormat';
import { ConfigContext } from '../../ConfigProvider';
import { ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID } from '../constants/counts';

import { useMonthsGrid } from './hooks/useMonthsGrid';

type DateMonthPickerProps = PickerProps & CommonDateCalendarHeadProps;

export const MonthPicker = ({
  date: initialDate,
  selectedDate,
  onChange,
  rangeDate,
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

  const { grid } = useMonthsGrid({
    baseDate,
    selectedDate,
    rangeDate,
  });

  const { year: yearCaption } = useContext(ConfigContext).datePickerLanguageMap;

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle={yearCaption.single}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        headBtnText={baseDate.getUTCFullYear()}
      />
      <DateCalendarGridLarge>
        {grid.map(({ month, date, ...props }, index) => (
          <DateCalendarGridBtnLarge
            key={`${month}_${index}`}
            onClick={() => onChange?.(date)}
            title={titleFormat(date)}
            lengthInRow={ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID}
            isPreviousItemInSelectedRange={grid[index - 1]?.isInSelectedRange}
            {...props}
          >
            {monthFormat(date)}
          </DateCalendarGridBtnLarge>
        ))}
      </DateCalendarGridLarge>
    </DateCalendarWrapper>
  );
};
