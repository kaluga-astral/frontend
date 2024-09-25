import { useSortable } from '@dnd-kit/sortable';

import type { SortableListItemProps } from '../SortableListItem';

type UseLogicParams = SortableListItemProps;

export const useLogic = ({ id, isDisabled }: UseLogicParams) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled: isDisabled,
  });

  return {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  };
};
