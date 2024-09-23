import { type PropsWithChildren, type ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import {
  ActionsWrapper,
  Content,
  DragIcon,
  IconWrapper,
  ListItem,
} from './styles';

export type SortableListItemProps = PropsWithChildren<{
  /**
   * Уникальный id элемента
   */
  keyId: string;
  /**
   * Флаг запрещающий перетягивать элемент
   */
  isDisabled?: boolean;
  /**
   * Кнопки действий
   */
  actions?: ReactNode;
}>;

export const SortableListItem = (props: SortableListItemProps) => {
  const { keyId, isDisabled, children, actions } = props;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: keyId, disabled: isDisabled });

  const isActionsExists = Boolean(actions);

  return (
    <ListItem
      ref={setNodeRef}
      $isDragging={isDragging}
      $isDisabled={isDisabled}
      $transform={CSS.Transform.toString(transform)}
      $transition={transition}
      $isActionsExists={isActionsExists}
    >
      <Content {...attributes} {...listeners}>
        <IconWrapper>{!isDisabled && <DragIcon />}</IconWrapper>
        {children}
      </Content>

      <ActionsWrapper>{actions}</ActionsWrapper>
    </ListItem>
  );
};
