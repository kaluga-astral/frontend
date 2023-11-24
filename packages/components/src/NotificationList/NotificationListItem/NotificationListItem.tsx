import { useEffect, useRef } from 'react';
import { CrossOutlineSm } from '@astral/icons';
import { useIntersection } from 'react-use';

import { Typography } from '../../Typography';
import { Notification } from '../types';

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

export type NotificationListItemProps = Notification & {
  onDelete?: (id: string | number) => void;
  /**
   * @description функция вызывается, когда уведомление полностью попало во viewport
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
  const entry = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  useEffect(() => {
    if (onViewNotification && isUnread && entry?.isIntersecting) {
      onViewNotification(id);
    }
  }, [onViewNotification, entry?.isIntersecting, isUnread, id]);

  return (
    <ListItem ref={ref}>
      <ListItemIconSlot>
        <ListItemPriority priority={priority} />
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
