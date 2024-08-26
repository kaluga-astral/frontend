import { useContext, useEffect } from 'react';

import {
  type CommonDateCalendarHeadProps,
  DateCalendarHead,
  DateCalendarWrapper,
  StaticDaysCalendarWrapper,
} from '../DateCalendar';
import { useCalendarNavigate } from '../hooks/useCalendarNavigate';
import { type PickerProps } from '../types';
import { addMonths } from '../../utils/date';
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
        DayTooltipTitle={({ date }) => dayFormat(date)}
        DayContent={({ monthDay }) => monthDay}
        minDate={minDate}
        maxDate={maxDate}
        selectedDate={selectedDate}
        baseDate={baseDate}
        onDayHover={onDayHover}
        hoveredDate={hoveredDayDate}
        rangeDate={rangeDate}
        onChange={onChange}
        isMondayFirst={isMondayFirst}
      />
    </DateCalendarWrapper>
  );
};
