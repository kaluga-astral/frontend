import { NotificationPriorities } from './enums';

export type NotificationPriority = keyof typeof NotificationPriorities;

export type Notification = {
  /**
   * @description уникальный идентификатор уведомления
   * @default ''
   * */
  id: string | number;
  /**
   * @description заголовок уведомления
   * @default ''
   * */
  title: string;
  /**
   * @description дата создания уведомления
   * @default ''
   * */
  date: string | Date;
  /**
   * @description текст уведомления
   * @default ''
   * */
  text: string;
  /**
   * @description приоритет уведомления
   * @default 'ordinary'
   * */
  priority?: NotificationPriority;
  /**
   * @description флаг показывает, что уведомление не прочитано
   * @default true
   * */
  isUnread?: boolean;
  /**
   * @description дополнительные действия
   * @default undefined
   * */
  actions?: React.ReactNode;
};
