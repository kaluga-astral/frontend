import { useRef } from 'react';
import { CrossOutlineSm } from '@astral/icons';

import { Typography } from '../../Typography';
import { NotificationListItemProps } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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

export const NotificationListItem = (props: NotificationListItemProps) => {
  const {
    id,
    title,
    date,
    text,
    icon,
    priority = 'ordinary',
    actions,
    isUnread = true,
    onNotificationVisible,
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

  if (onNotificationVisible && isUnread && !!entry?.isIntersecting) {
    onNotificationVisible(id);
  }

  return (
    <ListItem ref={ref}>
      <ListItemIconSlot priority={priority}>
        {icon ?? <ListItemPriority />}
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
