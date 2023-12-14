import { type NotificationPriorities } from './enums';

export type NotificationPriority = keyof typeof NotificationPriorities;

export type NotificationListType = 'all' | 'unread';

export type Notification = {
  /**
   * @description уникальный идентификатор уведомления
   * */
  id: string;
  /**
   * @description заголовок уведомления
   * */
  title: string;
  /**
   * @description дата создания уведомления
   * */
  date: string | Date;
  /**
   * @description текст уведомления
   * */
  text: string;
  /**
   * @description приоритет уведомления
   * */
  priority?: NotificationPriority;
  /**
   * @description флаг показывает, что уведомление не прочитано
   * */
  isUnread?: boolean;
  /**
   * @description дополнительные действия
   * */
  actions?: React.ReactNode;
};
