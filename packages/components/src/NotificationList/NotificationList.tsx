import { useEffect, useRef, useState } from 'react';
import { SettingsOutlineMd } from '@astral/icons';

import { Button } from '../Button';
import { SideDialogHeader } from '../SideDialogHeader';
import { IconButton } from '../IconButton';
import { Divider } from '../Divider';

import { NotificationListItem } from './NotificationListItem';
import { NotificationListTabs } from './NotificationListTabs/NotificationListTabs';
import { Notification } from './types';
import {
  NotificationListDialog,
  NotificationListFooter,
  NotificationListHeader,
  NotificationListMain,
} from './styles';
import { NotificationListEmpty } from './NotificationListEmpty';

export type NotificationListProps = {
  /**
   * @description флаг управления отображением уведомлений
   * @type boolean
   * @default false
   * */
  isOpen: boolean;
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
  isInitialUnreadOnly?: boolean;
  /**
   * @description функция обработки закрытия уведомления
   * @type () => void
   * */
  onClose: () => void;
  /**
   * @description функция вызывается когда уведомление выводится на экран
   * @type (id: string | number) => void
   * */
  onViewNotification?: (id: string | number) => void;
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

export const NotificationList = ({
  isOpen,
  notifications,
  unreadNotifications,
  noDataImgSrc,
  isInitialUnreadOnly = false,
  onClose,
  onDelete,
  onReadAll,
  onViewNotification,
  onSettingsButtonClick,
  onTabChange,
}: NotificationListProps) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [isUnreadOnly, setIsUnreadOnly] = useState(isInitialUnreadOnly);
  const visibleNotifications = (() => {
    if (unreadNotifications && isUnreadOnly) {
      return unreadNotifications;
    }

    return notifications;
  })();

  const handleToggleUnreadOnly = () => {
    setIsUnreadOnly((prev) => !prev);

    if (onTabChange) {
      onTabChange();
    }
  };

  const renderTabs = () => {
    if (unreadNotifications) {
      return (
        <NotificationListTabs
          isUnreadOnly={isUnreadOnly}
          onToggleUnreadOnly={handleToggleUnreadOnly}
          notificationsCount={notifications.length}
          unreadNotificationsCount={unreadNotifications?.length || 0}
        />
      );
    }

    return null;
  };

  const renderFooter = () => {
    const handleMarkAllAsRead = () => {
      if (onReadAll) {
        onReadAll(visibleNotifications);
      }
    };

    if (onReadAll) {
      return (
        <NotificationListFooter>
          <Button onClick={handleMarkAllAsRead} variant="light">
            Отметить все как прочитанные
          </Button>
        </NotificationListFooter>
      );
    }

    return null;
  };

  const renderContent = () => {
    if (visibleNotifications.length) {
      return (
        <>
          <NotificationListMain ref={listRef}>
            {visibleNotifications.map((notification) => (
              <NotificationListItem
                key={notification.id}
                {...notification}
                onDelete={onDelete}
                onViewNotification={onViewNotification}
              />
            ))}
          </NotificationListMain>
          {renderFooter()}
        </>
      );
    }

    return (
      <NotificationListEmpty
        isUnreadOnly={isUnreadOnly}
        noDataImgSrc={noDataImgSrc}
      />
    );
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [isUnreadOnly]);

  return (
    <NotificationListDialog open={isOpen} onClose={onClose}>
      <SideDialogHeader title="Уведомления" onClose={onClose}>
        <NotificationListHeader>
          <IconButton variant="text" onClick={onSettingsButtonClick}>
            <SettingsOutlineMd />
          </IconButton>
          <Divider orientation="vertical" />
        </NotificationListHeader>
      </SideDialogHeader>
      {renderTabs()}
      {renderContent()}
    </NotificationListDialog>
  );
};
