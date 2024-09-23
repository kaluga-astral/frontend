import { useMemo, useState } from 'react';
import { type DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import type { ObjectWithId } from '../types';

type UseLogicProps<TDataItem extends ObjectWithId> = {
  data?: TDataItem[];
  isLockedHorizontalAxis?: boolean;
  onDragStart?: (event: DragEndEvent) => void;
  onDragEnd: (event: DragEndEvent) => void;
};

export const useLogic = <TDataItem extends ObjectWithId>(
  props: UseLogicProps<TDataItem>,
) => {
  const { data, isLockedHorizontalAxis, onDragStart, onDragEnd } = props;

  const [activeId, setActiveId] = useState<string | number | null>(null);

  const activeItem = useMemo(
    () => data?.find((item) => item.id === activeId),
    [data, activeId],
  );

  const modifiers = useMemo(
    () => (isLockedHorizontalAxis ? [restrictToVerticalAxis] : []),
    [isLockedHorizontalAxis],
  );

  function handleDragStart(event: DragEndEvent) {
    onDragStart?.(event);

    const { active } = event;

    if (!active) {
      return;
    }

    setActiveId(active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null);
    onDragEnd(event);
  }

  return { activeItem, handleDragStart, handleDragEnd, modifiers };
};
