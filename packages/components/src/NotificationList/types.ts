import { PRIORITIES } from './constants';

export type NotificationListPriority =
  (typeof PRIORITIES)[keyof typeof PRIORITIES];

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
   * @description иконка уведомления
   * @type React.ReactNode
   * @default undefined
   * */
  icon?: React.ReactNode;
  /**
   * @description дополнительные действия
   * @type React.ReactNode
   * @default undefined
   * */
  actions?: React.ReactNode;
};

export type NotificationListProps = {
  /**
   * @description флаг управления отображением уведомлений
   * @type boolean
   * @default false
   * */
  open: boolean;
  /**
   * @description список уведомлений
   * @type Notification[]
   * @default []
   * */
  notifications: Notification[];
  /**
   * @description список непрочитанных уведомлений
   * @type Notification[]
   * @default undefined
   * */
  unreadNotifications?: Notification[];
  /**
   * @description источник изображения при отсутствии уведомлений
   * @type string
   * @default undefined
   * */
  noDataImgSrc?: string;
  /**
   * @description флаг управления отображением непрочитанных уведомлений
   * @type boolean
   * @default false
   * */
  initialUnreadOnly?: boolean;
  /**
   * @description функция обработки закрытия уведомления
   * @type () => void
   * */
  onClose: () => void;
  /**
   * @description функция вызывается когда уведомление выводится на экран
   * @type (id: string | number) => void
   * */
  onNotificationVisible?: (id: string | number) => void;
  /**
   * @description функция обработки прочтения всех уведомления
   * @type (notifications: Notification[]) => void
   * */
  onReadAll?: (notifications: Notification[]) => void;
  /**
   * @description функция обработки удаления уведомления
   * @type (id: string | number) => void
   * */
  onDelete?: (id: string | number) => void;
  /**
   * @description функция обработки нажатия на кнопку настроек
   * @type () => void
   * */
  onSettingsButtonClick?: () => void;
  /**
   * @description функция обработки смены вкладки
   * @type () => void
   * */
  onTabChange?: () => void;
};

export type NotificationListItemProps = Notification & {
  onDelete?: (id: string | number) => void;
  onNotificationVisible?: (id: string | number) => void;
};
