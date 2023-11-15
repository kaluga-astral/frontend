import { NOTIFICATION_PRIORITIES } from './constants';

export type NotificationListPriority =
  (typeof NOTIFICATION_PRIORITIES)[keyof typeof NOTIFICATION_PRIORITIES];

export type Notification = {
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
};
