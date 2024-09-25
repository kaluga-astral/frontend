import { useCallback, useContext, useEffect, useMemo } from 'react';
import { addMonths } from '@astral/utils';

import {
  type CommonDateCalendarHeadProps,
  DateCalendarHead,
  DateCalendarWrapper,
  StaticDaysCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { type PickerProps } from '../types';
import { useLocaleDateTimeFormat } from '../../hooks';
import { ConfigContext } from '../../ConfigProvider';
import { PopoverHoveredContext } from '../PopoverHoveredContext';
import { MinMaxDateContext } from '../MinMaxDateContext';

export type MondayFirst = {
  /**
   * флаг рендера календаря дней начиная с понедельника
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

  const { maxDate, minDate } = useContext(MinMaxDateContext);

  /*
  Убираем hover day из стейта, если курсор вышел за проделы popover
   */
  useEffect(() => {
    if (!popoverHovered) {
      onDayHover?.();
    }
  }, [onDayHover, popoverHovered]);

  const renderDayTooltipTitle = useCallback(
    ({ date }: { date: Date }) => {
      return dayFormat(date);
    },
    [dayFormat],
  );

  const selectedRanges = useMemo(() => {
    if (!selectedDate || !rangeDate) {
      return null;
    }

    return [{ dateA: selectedDate, dateB: rangeDate }];
  }, [selectedDate, rangeDate]);

  return (
    <DateCalendarWrapper>
      <DateCalendarHead
        {...headProps}
        arrowPostfixTitle={monthCaption.single}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        headBtnText={monthYearFormat(baseDate)}
      />
      <StaticDaysCalendarWrapper
        renderDayTooltipTitle={renderDayTooltipTitle}
        minDate={minDate}
        maxDate={maxDate}
        selectedDate={selectedDate}
        baseDate={baseDate}
        onDayHover={onDayHover}
        hoveredDate={hoveredDayDate}
        selectedRanges={selectedRanges}
        onChange={onChange}
        isMondayFirst={isMondayFirst}
      />
    </DateCalendarWrapper>
  );
};
