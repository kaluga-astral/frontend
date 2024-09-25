import { type PropsWithChildren, type ReactNode } from 'react';
import { CSS } from '@dnd-kit/utilities';

import {
  ActionsWrapper,
  Content,
  DragIcon,
  IconWrapper,
  ListItem,
} from './styles';
import { useLogic } from './useLogic';

export type SortableListItemProps = PropsWithChildren<{
  /**
   * Уникальный id элемента
   */
  id: string;
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
  const { isDisabled, children, actions, id } = props;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useLogic(props);

  const isActionsExists = Boolean(actions);

  return (
    <ListItem
      key={id}
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
