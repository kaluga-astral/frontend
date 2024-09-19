import type { ReactNode } from 'react';

import { StaticCalendarGridButton } from '../../StaticCalendarGridButton';
import { type CalendarGridItemDay } from '../../../utils/date';
import { DAYS_IN_WEEK } from '../../../constants';
import type { CalendarGridItem } from '../../../types';

import { useLogic } from './useLogic';

type Item = CalendarGridItem<CalendarGridItemDay>;

type MainButtonProps = Item & {
  renderDayTooltipTitle?: (item: Item) => ReactNode;
  renderDayContent?: (item: Item) => ReactNode;
  isPreviousItemInSelectedRange?: boolean;
  isNextItemInSelectedRange?: boolean;
  onClick?: (date: Date) => void;
  onDayHover?: (date?: Date) => void;
  /**
   * Пропс отвечающий за отключение возможности взаимодействия с тултипом
   * @deprecated временное решение, и в последующем будет убрано
   * @default true
   */
  disableTooltipInteractive?: boolean;
};

export const DayButton = ({
  onClick,
  renderDayContent,
  renderDayTooltipTitle,
  onDayHover,
  disableTooltipInteractive,
  ...props
}: MainButtonProps) => {
  const {
    isNotInteractable,
    handleMouseEnter,
    handleRenderDayContent,
    handleOnClick,
    component,
  } = useLogic({
    date: props.date,
    monthDay: props.monthDay,
    onDayHover,
    onClick,
    renderDayContent,
  });

  return (
    <StaticCalendarGridButton
      isHoliday={props.isHoliday}
      disabled={props.isDisabled}
      selected={props.isSelected}
      aria-selected={props.isSelected}
      component={component}
      $isNotInteractable={isNotInteractable}
      isOutOfAvailableRange={props.isOutOfAvailableRange}
      isCurrentInUserLocalTime={props.isCurrentInUserLocalTime}
      isInSelectedRange={props.isInSelectedRange}
      onClick={handleOnClick}
      tooltipTitle={renderDayTooltipTitle?.(props)}
      lengthInRow={DAYS_IN_WEEK}
      isPreviousItemInSelectedRange={props.isPreviousItemInSelectedRange}
      isNextItemInSelectedRange={props.isNextItemInSelectedRange}
      onMouseEnter={handleMouseEnter}
      isInHoveredRange={props.isInHoveredRange}
      disableInteractive={disableTooltipInteractive}
    >
      {handleRenderDayContent(props)}
    </StaticCalendarGridButton>
  );
};
