import type { ElementType, ReactNode } from 'react';

import type { CalendarGridItem } from '../../../../types';
import type { CalendarGridItemDay } from '../../../../utils/date';

type Item = CalendarGridItem<CalendarGridItemDay>;

type UseLogicParams = {
  onClick?: (date: Date) => void;
  renderDayContent?: (item: Item) => ReactNode;
  onDayHover?: (date?: Date) => void;
  monthDay: number;
  date: Date;
};

export const useLogic = ({
  onClick,
  renderDayContent,
  onDayHover,
  monthDay,
  date,
}: UseLogicParams) => {
  const handleMouseEnter = Boolean(onDayHover)
    ? () => onDayHover?.(date)
    : undefined;

  const handleRenderDayContent = renderDayContent
    ? renderDayContent
    : () => monthDay;

  const handleOnClick = Boolean(onClick) ? () => onClick?.(date) : undefined;

  const component = !Boolean(onClick) ? ('time' as ElementType) : undefined;

  const isNotInteractable = !Boolean(onClick);

  return {
    handleMouseEnter,
    handleRenderDayContent,
    handleOnClick,
    component,
    isNotInteractable,
  };
};
