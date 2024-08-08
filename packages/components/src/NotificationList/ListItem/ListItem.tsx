import { useEffect, useRef } from 'react';
import { CrossOutlineSm } from '@astral/icons';
import { useIntersection } from 'react-use';

import { Typography } from '../../Typography';
import { type Notification } from '../types';

import {
  Actions,
  CloseButton,
  DateText,
  IconSlot,
  Priority,
  Title,
  Wrapper,
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

export type ListItemProps = Notification & {
  /**
   * Флаг управляет отображение кнопки удаления уведомления
   * */
  isDeleteButtonVisible: boolean;
  /**
   * Функция удаления уведомления
   * */
  onDelete?: (id: string) => void;
  /**
   * функция вызывается, когда уведомление полностью попало во viewport
   * */
  onViewNotification?: (id: string) => void;
};

export const ListItem = (props: ListItemProps) => {
  const {
    id,
    title,
    date,
    text,
    priority = 'ordinary',
    actions,
    isUnread = true,
    onViewNotification,
    isDeleteButtonVisible,
    onDelete,
  } = props;
  const ref = useRef<HTMLLIElement | null>(null);
  const entry = useIntersection(ref, {
    root: null,
    threshold: 0.95,
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
    <Wrapper ref={ref}>
      <IconSlot>
        <Priority priority={priority} />
      </IconSlot>
      <div>
        <Title variant={isUnread ? 'h6' : 'ui'}>{title}</Title>
        <DateText>{getDateFormat(date)}</DateText>
        <Typography
          gutterBottom={Boolean(actions)}
          variant="ui"
          color="grey"
          colorIntensity="800"
        >
          {text}
        </Typography>
        {actions && <Actions>{actions}</Actions>}
      </div>
      {isDeleteButtonVisible && (
        <CloseButton onClick={handleDelete} variant="text" size="small">
          <CrossOutlineSm />
        </CloseButton>
      )}
    </Wrapper>
  );
};
