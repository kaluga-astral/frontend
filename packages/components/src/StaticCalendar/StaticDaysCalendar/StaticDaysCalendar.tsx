import { type ReactNode, useId, useMemo } from 'react';

import {
  type CalendarGridItemDay,
  DAYS_IN_WEEK,
  buildDaysCalendarGrid,
  formatDate,
} from '../../utils/date';
import { StaticCalendarGridButton } from '../StaticCalendarGridButton';
import { type CalendarGridItem } from '../../types';

import { Head } from './Head';
import { Body } from './styles';

type Item = CalendarGridItem<CalendarGridItemDay>;

type StaticDaysCalendarProps = {
  onChange?: (date: Date) => void;
  /**
   * Колбек, вызываемый при событии hover на день календаря
   */
  onDayHover?: (date?: Date) => void;
  /**
   * День, который находится в состоянии hover
   */
  hoveredDate?: Date;
  /**
   * флаг рендера календаря дней начиная с понедельника
   * @default true
   */
  isMondayFirst?: boolean;
  className?: string;
  /**
   * Контент, который необходимо отрендерить в тултипе для каждого дня
   */
  DayTooltipTitle: (item: Item) => ReactNode;
  /**
   * Контент, который необходимо отрендерить в контенте каждого элемента
   */
  DayContent: (item: Item) => ReactNode;
} & Pick<
  Parameters<typeof buildDaysCalendarGrid>[0],
  | 'baseDate'
  | 'selectedDate'
  | 'isMondayFirst'
  | 'minDate'
  | 'maxDate'
  | 'hoveredDate'
  | 'selectedRanges'
>;

export const StaticDaysCalendar = ({
  minDate,
  maxDate,
  selectedDate,
  baseDate,
  onDayHover,
  hoveredDate,
  onChange,
  isMondayFirst,
  className,
  DayTooltipTitle,
  DayContent,
  selectedRanges,
}: StaticDaysCalendarProps) => {
  const isAbleToHover = Boolean(onDayHover);
  const id = useId();

  const grid = useMemo(
    () =>
      buildDaysCalendarGrid({
        baseDate,
        selectedDate,
        isMondayFirst,
        minDate,
        maxDate,
        hoveredDate,
        selectedRanges,
      }),
    [baseDate, selectedDate, maxDate, minDate, hoveredDate, selectedRanges],
  );

  return (
    <article className={className}>
      <Head isMondayFirst={isMondayFirst} />
      <Body role="grid">
        {grid.map((props, index) => (
          <StaticCalendarGridButton
            key={`${id}_${index}`}
            disabled={props.isDisabled}
            selected={props.isSelected}
            component={!onChange ? 'time' : undefined}
            //@ts-ignore пропс обозначающий значение даты, необходим для тега time
            datetime={
              !onChange ? formatDate(props.date, 'YYYY-MM-DD', '-') : undefined
            }
            isOutOfAvailableRange={props.isOutOfAvailableRange}
            isCurrentInUserLocalTime={props.isCurrentInUserLocalTime}
            isInSelectedRange={props.isInSelectedRange}
            onClick={() => onChange?.(props.date)}
            tooltipTitle={<DayTooltipTitle {...props} />}
            lengthInRow={DAYS_IN_WEEK}
            isPreviousItemInSelectedRange={grid[index - 1]?.isInSelectedRange}
            onMouseEnter={
              isAbleToHover ? () => onDayHover?.(props.date) : undefined
            }
            isInHoveredRange={props.isInHoveredRange}
          >
            <DayContent {...props} />
          </StaticCalendarGridButton>
        ))}
      </Body>
    </article>
  );
};
