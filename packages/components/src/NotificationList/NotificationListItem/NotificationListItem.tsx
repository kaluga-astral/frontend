import { useRef } from 'react';
import { CrossOutlineSm } from '@astral/icons';

import { Typography } from '../../Typography';
import { NotificationListPriority } from '../types';

import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import {
  ListItem,
  ListItemActions,
  ListItemCloseButton,
  ListItemDate,
  ListItemIconSlot,
  ListItemPriority,
  ListItemTitle,
} from './styles';

const getDateFormat = (date: string | Date | null) => {
  if (!date) {
    return '';
  }

  return new Date(date).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export type NotificationListItemProps = {
  /**
   * @description уникальный идентификатор уведомления
   * @type string | number
   * @default ''
   * */
  id: string | number;
  /**
   * @description заголовок уведомления
   * @type string
   * @default ''
   * */
  title: string;
  /**
   * @description дата создания уведомления
   * @type string | Date
   * @default ''
   * */
  date: string | Date;
  /**
   * @description текст уведомления
   * @type string
   * @default ''
   * */
  text: string;
  /**
   * @description приоритет уведомления
   * @type NotificationListPriority
   * @default 'ordinary'
   * */
  priority?: NotificationListPriority;
  /**
   * @description флаг прочтения уведомления
   * @type boolean
   * @default true
   * */
  isUnread?: boolean;
  /**
   * @description дополнительные действия
   * @type React.ReactNode
   * @default undefined
   * */
  actions?: React.ReactNode;
  /**
   * @description функция удаления уведомления
   * @type (id: string | number) => void
   * @default undefined
   * */
  onDelete?: (id: string | number) => void;
  /**
   * @description функция вызывается при появлении уведомления на экране
   * @type (id: string | number) => void
   * @default undefined
   * */
  onViewNotification?: (id: string | number) => void;
};

export const NotificationListItem = (props: NotificationListItemProps) => {
  const {
    id,
    title,
    date,
    text,
    priority = 'ordinary',
    actions,
    isUnread = true,
    onViewNotification,
    onDelete,
  } = props;
  const ref = useRef<HTMLLIElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 1,
    freezeOnceVisible: true,
  });

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  if (onViewNotification && isUnread && entry?.isIntersecting) {
    onViewNotification(id);
  }

  return (
    <ListItem ref={ref}>
      <ListItemIconSlot priority={priority}>
        <ListItemPriority />
      </ListItemIconSlot>
      <div>
        <ListItemTitle variant="h6" isUnread={isUnread}>
          {title}
        </ListItemTitle>
        <ListItemDate>{getDateFormat(date)}</ListItemDate>
        <Typography
          gutterBottom={Boolean(actions)}
          color="grey"
          colorIntensity="800"
        >
          {text}
        </Typography>
        {actions && <ListItemActions>{actions}</ListItemActions>}
      </div>
      {onDelete ? (
        <ListItemCloseButton onClick={handleDelete} variant="text" size="small">
          <CrossOutlineSm />
        </ListItemCloseButton>
      ) : null}
    </ListItem>
  );
};
