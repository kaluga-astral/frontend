import { type NotificationPriorities } from './enums';

export type NotificationPriority = keyof typeof NotificationPriorities;

export type NotificationListType = 'all' | 'unread';

export type Notification = {
  /**
   * уникальный идентификатор уведомления
   * */
  id: string;
  /**
   * заголовок уведомления
   * */
  title: string;
  /**
   * дата создания уведомления
   * */
  date: string | Date;
  /**
   * текст уведомления
   * */
  text: string;
  /**
   * приоритет уведомления
   * */
  priority?: NotificationPriority;
  /**
   * флаг показывает, что уведомление не прочитано
   * */
  isUnread?: boolean;
  /**
   * дополнительные действия
   * */
  actions?: React.ReactNode;
};
