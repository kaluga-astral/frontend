import { useEffect, useRef, useState } from 'react';
import { SettingsOutlineMd } from '@astral/icons';

import { Button } from '../Button';
import { SideDialogHeader } from '../SideDialogHeader';
import { IconButton } from '../IconButton';
import { Divider } from '../Divider';

import { NotificationListItem } from './NotificationListItem';
import { NotificationListTabs } from './NotificationListTabs/NotificationListTabs';
import {
  NotificationListDialog,
  NotificationListFooter,
  NotificationListHeader,
  NotificationListMain,
} from './styles';
import { NotificationListEmpty } from './NotificationListEmpty';
import { NotificationListProps } from './types';

export const NotificationList = ({
  open,
  notifications,
  unreadNotifications,
  noDataImgSrc,
  initialUnreadOnly = false,
  onClose,
  onDelete,
  onReadAll,
  onNotificationVisible,
  onSettingsButtonClick,
  onTabChange,
}: NotificationListProps) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [isUnreadOnly, setIsUnreadOnly] = useState(
    Boolean(unreadNotifications) && initialUnreadOnly,
  );
  const visibleNotifications =
    unreadNotifications && isUnreadOnly ? unreadNotifications : notifications;

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
                onNotificationVisible={onNotificationVisible}
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
    <NotificationListDialog open={open} onClose={onClose}>
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
