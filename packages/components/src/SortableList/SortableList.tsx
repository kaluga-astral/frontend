import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  closestCenter,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { type ElementType, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import type { RequiredKeys } from '../types';

import type { ObjectWithId } from './types';
import { useLogic } from './useLogic';
import {
  type DataDisplayStrategyProps,
  SimpleDataDisplayStrategy,
} from './DataDisplayStrategy';

export type SortableListProps<TDataItem extends Record<string, unknown>> = {
  /**
   * Массив элементов
   */
  data: Array<TDataItem>;

  /**
   * Поле, используемое в качестве ключа списка
   */
  keyId: RequiredKeys<TDataItem>;

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
  ListItem: ElementType<{
    item: TDataItem;
    [key: string]: unknown;
  }>;
  /**
   * Флаг, запрещающий перетягивать элементы по горизонтальной оси
   */
  isLockedHorizontalAxis?: boolean;

  /**
   * Заменяемый компонент-список. Может быть либо SimpleDataDisplayStrategy, либо VirtualDataDisplayStrategy
   */
  DataDisplayStrategy?: (
    props: DataDisplayStrategyProps<TDataItem>,
  ) => ReactNode;
};

export const SortableList = <TDataItem extends ObjectWithId>(
  props: SortableListProps<TDataItem>,
) => {
  const {
    data,
    ListItem,
    DataDisplayStrategy = SimpleDataDisplayStrategy,
    keyId,
  } = props;

  const { activeItem, modifiers, handleDragStart, handleDragEnd, sensors } =
    useLogic(props);

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
        <DataDisplayStrategy
          data={data}
          itemContent={(item) => <ListItem item={item} />}
          keyId={keyId}
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
