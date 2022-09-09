import {
  CommonDateCalendarHeadProps,
  DateCalendarGridBtnLarge,
  DateCalendarGridLarge,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../../hooks/useCalendarNavigate';
import { addYears } from '../../utils/addYears';
import { PickerProps } from '../../types/pickerProps';

import { useYearsGrid } from './hooks/useYearsGrid';
import { YEARS_IN_GRID } from './constants';

type DateYearPickerProps = PickerProps & CommonDateCalendarHeadProps;

export const YearPicker = ({
  date: initialDate,
  selectedDate,
  onChange,
  ...headProps
}: DateYearPickerProps) => {
  const { baseDate, handlePrevClick, handleNextClick } = useCalendarNavigate({
    date: initialDate,
    addCb: (date, direction) => addYears(date, YEARS_IN_GRID * direction),
  });
  const { grid, isPrevDisabled, isNextDisabled } = useYearsGrid({
    baseDate,
    selectedDate,
  });

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle="года"
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
            {...props}
          >
            {year}
          </DateCalendarGridBtnLarge>
        ))}
      </DateCalendarGridLarge>
    </DateCalendarWrapper>
  );
};
