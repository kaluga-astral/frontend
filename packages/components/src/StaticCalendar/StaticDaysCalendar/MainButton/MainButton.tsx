import type { ReactNode } from 'react';

import { StaticCalendarGridButton } from '../../StaticCalendarGridButton';
import { type CalendarGridItemDay, DAYS_IN_WEEK } from '../../../utils/date';
import type { CalendarGridItem } from '../../../types';

type Item = CalendarGridItem<CalendarGridItemDay>;

type MainButtonProps = Item & {
  renderDayTooltipTitle?: (item: Item) => ReactNode;
  renderDayContent?: (item: Item) => ReactNode;
  isPreviousItemInSelectedRange?: boolean;
  isNextItemInSelectedRange?: boolean;
  onClick?: (date: Date) => void;
  onDayHover?: (date?: Date) => void;
};

export const MainButton = ({
  onClick,
  renderDayContent,
  renderDayTooltipTitle,
  onDayHover,
  isPreviousItemInSelectedRange,
  isNextItemInSelectedRange,
  ...props
}: MainButtonProps) => (
  <StaticCalendarGridButton
    isHoliday={props.isHoliday}
    disabled={props.isDisabled}
    selected={props.isSelected}
    aria-selected={props.isSelected}
    component={!onClick ? 'time' : undefined}
    isNotInteractable={!Boolean(onClick)}
    isOutOfAvailableRange={props.isOutOfAvailableRange}
    isCurrentInUserLocalTime={props.isCurrentInUserLocalTime}
    isInSelectedRange={props.isInSelectedRange}
    onClick={() => onClick?.(props.date)}
    tooltipTitle={renderDayTooltipTitle?.(props)}
    lengthInRow={DAYS_IN_WEEK}
    isPreviousItemInSelectedRange={isPreviousItemInSelectedRange}
    isNextItemInSelectedRange={isNextItemInSelectedRange}
    onMouseEnter={
      Boolean(onDayHover) ? () => onDayHover?.(props.date) : undefined
    }
    isInHoveredRange={props.isInHoveredRange}
  >
    {renderDayContent ? renderDayContent(props) : props.monthDay}
  </StaticCalendarGridButton>
);
