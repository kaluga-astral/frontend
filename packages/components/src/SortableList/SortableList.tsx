import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { type ElementType } from 'react';
import { createPortal } from 'react-dom';

import { DataList, type DataListProps } from '../DataList';

import type { ObjectWithId } from './types';
import { useLogic } from './useLogic';

export type SortableListProps<TDataItem extends ObjectWithId> = Omit<
  DataListProps<TDataItem>,
  'itemContent'
> & {
  /**
   * Обработчик начала перетягивания
   */
  onDragStart?: (event: DragEndEvent) => void;
  /**
   * Обработчик завершения перетягивания
   */
  onDragEnd: (event: DragEndEvent) => void;
  /**
   * Содержимое элемента списка
   */
  ListItem: ElementType<{ item: TDataItem }>;
  /**
   * Флаг, запрещающий перетягивать элементы по горизонтальной оси
   */
  isLockedHorizontalAxis?: boolean;
};

export const SortableList = <TDataItem extends ObjectWithId>(
  props: SortableListProps<TDataItem>,
) => {
  const {
    data,
    onDragStart,
    onDragEnd,
    ListItem,
    isLockedHorizontalAxis = true,
    ...otherProps
  } = props;
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const { activeItem, modifiers, handleDragStart, handleDragEnd } = useLogic({
    data,
    isLockedHorizontalAxis,
    onDragStart,
    onDragEnd,
  });

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={modifiers}
    >
      <SortableContext
        items={data || []}
        strategy={verticalListSortingStrategy}
      >
        <DataList
          {...otherProps}
          data={data}
          itemContent={(item) => <ListItem item={item} />}
        />
      </SortableContext>
      {createPortal(
        <DragOverlay>
          {activeItem && <ListItem item={activeItem} />}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};
