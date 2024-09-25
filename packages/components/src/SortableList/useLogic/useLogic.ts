import { useMemo, useState } from 'react';
import {
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import type { ObjectWithId } from '../types';
import { type SortableListProps } from '../SortableList';

type UseLogicParams<TDataItem extends ObjectWithId> =
  SortableListProps<TDataItem>;

export const useLogic = <TDataItem extends ObjectWithId>({
  data,
  isLockedHorizontalAxis,
  onDragStart,
  onDragEnd,
}: UseLogicParams<TDataItem>) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [activeId, setActiveId] = useState<string | number | null>(null);

  const activeItem = useMemo(
    () => data?.find((item) => item.id === activeId),
    [data, activeId],
  );

  const modifiers = useMemo(
    () => (isLockedHorizontalAxis ? [restrictToVerticalAxis] : []),
    [isLockedHorizontalAxis],
  );

  const handleDragStart = (event: DragEndEvent) => {
    onDragStart?.(event);

    const { active } = event;

    if (!active) {
      return;
    }

    setActiveId(active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    onDragEnd(event);
  };

  return { activeItem, handleDragStart, handleDragEnd, modifiers, sensors };
};
