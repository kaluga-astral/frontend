import { type ReactNode, memo, useCallback, useMemo } from 'react';

import {
  type CalendarGridItemDay,
  buildDaysCalendarGrid,
} from '../../utils/date';
import { type CalendarGridItem } from '../../types';
import { checkIsDeepEqual } from '../../utils/external';
import { useId } from '../../hooks/useId';

import { Head } from './Head';
import { Body } from './styles';
import { DayButton } from './DayButton';
import { useLogic } from './useLogic';

type Item = CalendarGridItem<CalendarGridItemDay>;

export type StaticDaysCalendarProps = {
  onChange?: (date: Date) => void;
  /**
   * Колбек, вызываемый при событии hover на день календаря
   */
  onDayHover?: (date?: Date) => void;
  className?: string;
  /**
   * Контент, который необходимо отрендерить в тултипе для каждого дня.
   * Для оптимальной работы требуется передавать не анонимную функцию
   */
  renderDayTooltipTitle?: (item: Item) => ReactNode;
  /**
   * Контент, который необходимо отрендерить в контенте каждого элемента.
   * Для оптимальной работы требуется передавать не анонимную функцию
   * @default по умолчанию рендерится день месяца
   */
  renderDayContent?: (item: Item) => ReactNode;
  /**
   * Метод, решающий необходимость отключения возможности взаимодействия с тултипом
   * @deprecated временное решение, и в последующем будет убрано
   */
  checkDisableTooltipInteractive?: (item: Item) => boolean;
  /**
   * Флаг, отвечающий за необходимость скрытия дней, не относящихся к диапазону основного месяца
   */
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
  | 'productionCalendarStorage'
>;

const StaticDaysCalendarInner = memo(
  ({
    minDate,
    maxDate,
    selectedDate,
    baseDate,
    onDayHover,
    hoveredDate,
    onChange,
    isMondayFirst = true,
    className,
    renderDayTooltipTitle,
    renderDayContent,
    selectedRanges,
    hideOutOfAvailableRangeElements,
    productionCalendarStorage,
    checkDisableTooltipInteractive,
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
          productionCalendarStorage,
        }),
      [
        baseDate,
        selectedDate,
        maxDate,
        minDate,
        hoveredDate,
        selectedRanges,
        productionCalendarStorage,
      ],
    );

    const checkRenderRequirements = useCallback(
      (item: Item) =>
        hideOutOfAvailableRangeElements ? !item.isOutOfAvailableRange : true,
      [hideOutOfAvailableRangeElements],
    );

    return (
      <article className={className}>
        <Head
          isMondayFirst={isMondayFirst}
          hasHolidays={Boolean(productionCalendarStorage)}
        />
        <Body role="grid">
          {grid.map((item, index) =>
            checkRenderRequirements(item) ? (
              <DayButton
                key={`${id}_${index}`}
                isPreviousItemInSelectedRange={
                  grid[index - 1]?.isInSelectedRange
                }
                isNextItemInSelectedRange={grid[index + 1]?.isInSelectedRange}
                {...item}
                onClick={onChange}
                onDayHover={onDayHover}
                renderDayTooltipTitle={renderDayTooltipTitle}
                disableTooltipInteractive={checkDisableTooltipInteractive?.(
                  item,
                )}
                renderDayContent={renderDayContent}
              />
            ) : (
              <div key={`${id}_${index}`} />
            ),
          )}
        </Body>
      </article>
    );
  },
  (prev, next) =>
    checkIsDeepEqual(
      {
        baseDate: prev.baseDate,
        selectedDate: prev.selectedDate,
        isMondayFirst: prev.isMondayFirst,
        minDate: prev.minDate,
        maxDate: prev.maxDate,
        hoveredDate: prev.hoveredDate,
        selectedRanges: prev.selectedRanges,
        renderDayContent: prev.renderDayContent,
        renderDayTooltipTitle: prev.renderDayTooltipTitle,
      },
      {
        baseDate: next.baseDate,
        selectedDate: next.selectedDate,
        isMondayFirst: next.isMondayFirst,
        minDate: next.minDate,
        maxDate: next.maxDate,
        hoveredDate: next.hoveredDate,
        selectedRanges: next.selectedRanges,
        renderDayContent: next.renderDayContent,
        renderDayTooltipTitle: next.renderDayTooltipTitle,
      },
    ),
);

export const StaticDaysCalendar = ({
  selectedRanges,
  maxDate,
  minDate,
  selectedDate,
  hoveredDate,
  isMondayFirst = true,
  baseDate,
  ...props
}: StaticDaysCalendarProps) => {
  const {
    memoizedSelectedDate,
    memoizedHoveredDate,
    memoizedSelectedRanges,
    memoizedMinDate,
    memoizedMaxDate,
  } = useLogic({
    selectedRanges,
    maxDate,
    minDate,
    selectedDate,
    hoveredDate,
    isMondayFirst,
    baseDate,
  });

  return (
    <StaticDaysCalendarInner
      {...props}
      isMondayFirst={isMondayFirst}
      baseDate={baseDate}
      selectedDate={memoizedSelectedDate}
      hoveredDate={memoizedHoveredDate}
      selectedRanges={memoizedSelectedRanges}
      minDate={memoizedMinDate}
      maxDate={memoizedMaxDate}
    />
  );
};
