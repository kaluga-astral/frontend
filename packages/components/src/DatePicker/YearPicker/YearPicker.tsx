import { useContext } from 'react';

import {
  type CommonDateCalendarHeadProps,
  DateCalendarGridButtonLarge,
  DateCalendarGridLarge,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { addYears } from '../../utils/date';
import { type PickerProps } from '../types';
import { ConfigContext } from '../../ConfigProvider';
import { ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID } from '../constants';

import { useYearsGrid } from './hooks';
import { YEARS_IN_GRID } from './constants';

type DateYearPickerProps = PickerProps & CommonDateCalendarHeadProps;

export const YearPicker = ({
  date: initialDate,
  selectedDate,
  onChange,
  rangeDate,
  ...headProps
}: DateYearPickerProps) => {
  const { baseDate, handlePrevClick, handleNextClick } = useCalendarNavigate({
    date: initialDate,
    addCb: (date, direction) => addYears(date, YEARS_IN_GRID * direction),
  });
  const grid = useYearsGrid({
    baseDate,
    selectedDate,
    rangeDate,
  });

  const { year: yearCaption } = useContext(ConfigContext).datePickerLanguageMap;

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle={yearCaption.plural as string}
        isPlural
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        headBtnText={`${grid[0]?.year}-${grid.at(-1)?.year}`}
      />
      <DateCalendarGridLarge>
        {grid.map(({ year, date, ...props }, index) => (
          <DateCalendarGridButtonLarge
            key={year}
            onClick={() => onChange?.(date)}
            lengthInRow={ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID}
            isPreviousItemInSelectedRange={grid[index - 1]?.isInSelectedRange}
            {...props}
          >
            {year}
          </DateCalendarGridButtonLarge>
        ))}
      </DateCalendarGridLarge>
    </DateCalendarWrapper>
  );
};
