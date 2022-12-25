import { useContext } from 'react';

import {
  CommonDateCalendarHeadProps,
  DateCalendarGridBtnLarge,
  DateCalendarGridLarge,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { addYears } from '../../utils/date';
import { PickerProps } from '../types';
import { ConfigContext } from '../../ConfigProvider';
import { ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID } from '../constants/counts';

import { useYearsGrid } from './hooks/useYearsGrid';
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
  const { grid, isPrevDisabled, isNextDisabled } = useYearsGrid({
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
        onPrevClick={!isPrevDisabled ? handlePrevClick : undefined}
        onNextClick={!isNextDisabled ? handleNextClick : undefined}
        headBtnText={`${grid[0]?.year}-${grid.at(-1)?.year}`}
      />
      <DateCalendarGridLarge>
        {grid.map(({ year, date, ...props }) => (
          <DateCalendarGridBtnLarge
            key={year}
            onClick={() => onChange?.(date)}
            lengthInRow={ELEMENTS_COUNT_IN_ROW_IN_LARGE_GRID}
            {...props}
          >
            {year}
          </DateCalendarGridBtnLarge>
        ))}
      </DateCalendarGridLarge>
    </DateCalendarWrapper>
  );
};
