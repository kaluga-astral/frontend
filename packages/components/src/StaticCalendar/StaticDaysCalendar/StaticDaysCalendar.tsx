import { type ReactNode, useCallback, useId, useMemo } from 'react';

import {
  type CalendarGridItemDay,
  DAYS_IN_WEEK,
  buildDaysCalendarGrid,
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
  className?: string;
  /**
   * Контент, который необходимо отрендерить в тултипе для каждого дня
   */
  DayTooltipTitle?: (item: Item) => ReactNode;
  /**
   * Контент, который необходимо отрендерить в контенте каждого элемента
   * @default по умолчанию рендерится день месяца
   */
  DayContent?: (item: Item) => ReactNode;
  hideOutOfAvailableRangeElements?: boolean;
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

type MainButtonProps = Item &
  Pick<
    StaticDaysCalendarProps,
    'DayContent' | 'DayTooltipTitle' | 'onDayHover'
  > & {
    isPreviousItemInSelectedRange?: boolean;
    isNextItemInSelectedRange?: boolean;
    onClick?: (date: Date) => void;
  };

const MainButton = ({
  onClick,
  DayContent,
  DayTooltipTitle,
  onDayHover,
  isPreviousItemInSelectedRange,
  isNextItemInSelectedRange,
  ...props
}: MainButtonProps) => (
  <StaticCalendarGridButton
    disabled={props.isDisabled}
    selected={props.isSelected}
    aria-selected={props.isSelected}
    component={!onClick ? 'time' : undefined}
    isNotInteractable={!Boolean(onClick)}
    isOutOfAvailableRange={props.isOutOfAvailableRange}
    isCurrentInUserLocalTime={props.isCurrentInUserLocalTime}
    isInSelectedRange={props.isInSelectedRange}
    onClick={() => onClick?.(props.date)}
    tooltipTitle={DayTooltipTitle?.(props)}
    lengthInRow={DAYS_IN_WEEK}
    isPreviousItemInSelectedRange={isPreviousItemInSelectedRange}
    isNextItemInSelectedRange={isNextItemInSelectedRange}
    onMouseEnter={
      Boolean(onDayHover) ? () => onDayHover?.(props.date) : undefined
    }
    isInHoveredRange={props.isInHoveredRange}
  >
    {DayContent ? DayContent(props) : props.monthDay}
  </StaticCalendarGridButton>
);

export const StaticDaysCalendar = ({
  minDate,
  maxDate,
  selectedDate,
  baseDate,
  onDayHover,
  hoveredDate,
  onChange,
  isMondayFirst = true,
  className,
  DayTooltipTitle,
  DayContent,
  selectedRanges,
  hideOutOfAvailableRangeElements,
}: StaticDaysCalendarProps) => {
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

  const checkRenderRequirements = useCallback(
    (item: Item) =>
      hideOutOfAvailableRangeElements ? !item.isOutOfAvailableRange : true,
    [hideOutOfAvailableRangeElements],
  );

  return (
    <article className={className}>
      <Head isMondayFirst={isMondayFirst} />
      <Body role="grid">
        {grid.map((item, index) =>
          checkRenderRequirements(item) ? (
            <MainButton
              key={`${id}_${index}`}
              isPreviousItemInSelectedRange={grid[index - 1]?.isInSelectedRange}
              isNextItemInSelectedRange={grid[index + 1]?.isInSelectedRange}
              {...item}
              onClick={onChange}
              onDayHover={onDayHover}
              DayTooltipTitle={DayTooltipTitle}
              DayContent={DayContent}
            />
          ) : (
            <div key={`${id}_${index}`} />
          ),
        )}
      </Body>
    </article>
  );
};
