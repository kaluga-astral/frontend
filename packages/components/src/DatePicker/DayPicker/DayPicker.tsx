import { useContext, useEffect } from 'react';

import {
  type CommonDateCalendarHeadProps,
  DateCalendarBody,
  DateCalendarGridButton,
  DateCalendarHead,
  DateCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { type PickerProps } from '../types';
import { DateCompareDeep, addMonths } from '../../utils/date';
import { useLocaleDateTimeFormat } from '../hooks/useLocaleDateTimeFormat';
import { ConfigContext } from '../../ConfigProvider';
import { DAYS_IN_WEEK } from '../constants/counts';
import { isDateBetweenSelectedAndRangeDates } from '../utils';
import { PopoverHoveredContext } from '../PopoverHoveredContext';

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
  isRange,
  onDayHover,
  hoveredDayDate,
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

  const { popoverHovered } = useContext(PopoverHoveredContext);

  const { grid } = useDaysGrid({
    baseDate,
    selectedDate,
    isMondayFirst,
    fullSize: true,
    rangeDate,
  });

  const handleDayHover = (date: Date) => {
    onDayHover?.(date);
  };

  /*
  Убираем hover day из стейта, если курсор вышел за проделы popover
   */
  useEffect(() => {
    if (!popoverHovered) {
      onDayHover?.();
    }
  }, [onDayHover, popoverHovered]);

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
            <DateCalendarGridButton
              key={index}
              onClick={() => onChange?.(date)}
              title={dayFormat(date)}
              lengthInRow={DAYS_IN_WEEK}
              isPreviousItemInSelectedRange={grid[index - 1]?.isInSelectedRange}
              onMouseEnter={() => {
                handleDayHover(date);
              }}
              isInHoveredRange={
                isRange &&
                popoverHovered &&
                isDateBetweenSelectedAndRangeDates({
                  date,
                  selectedDate,
                  rangeDate: hoveredDayDate,
                  deep: DateCompareDeep.day,
                })
              }
              {...props}
            >
              {monthDay}
            </DateCalendarGridButton>
          ))}
        </DateDayPickerGridBody>
      </DateCalendarBody>
    </DateCalendarWrapper>
  );
};
