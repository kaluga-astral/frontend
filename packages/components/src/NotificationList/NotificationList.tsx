import { useMemo, useRef, useState } from 'react';

import { NotificationListItem } from './NotificationListItem';
import { NotificationListTabs } from './NotificationListTabs';
import { Notification } from './types';
import {
  NotificationListDialog,
  NotificationListHeader,
  NotificationListMain,
} from './styles';
import { NotificationListEmpty } from './NotificationListEmpty';
import { NotificationListSettingsButton } from './NotificationListSettingsButton';
import { NotificationListFooter } from './NotificationListFooter';

export type NotificationListProps = {
  /**
   * @description флаг управления отображением уведомлений
   * @default false
   * */
  isOpen: boolean;
  /**
   * @description Заголовок списка уведомлений
   * @default Уведомления
   * */
  title?: string;
  /**
   * @description список уведомлений
   * @default []
   * */
  notifications: Notification[];
  /**
   * @description список непрочитанных уведомлений
   * @default undefined
   * */
  unreadNotifications?: Notification[];
  /**
   * @description источник изображения при отсутствии уведомлений
   * @default undefined
   * */
  noDataImgSrc?: string;
  /**
   * @description описание изображения при отсутствии уведомлений
   * @default undefined
   * */
  noDataImgAlt?: string;
  /**
   * @description флаг управляет, какие уведомления выводить при открытии списка, все/непрочитанные
   * @default undefined
   * */
  isInitialUnreadOnly?: boolean;
  /**
   * @description слот для отображения дополнительных компонентов в заголовке
   * */
  headerContent?: React.ReactNode;
  /**
   * @description функция для закрытия уведомлений, передает id уведомлений, попавших во viewport
   * */
  onClose: (viewedIds: (number | string)[]) => void;
  /**
   * @description функция обработки нажатия на кнопку "Отметить все как прочтенные"
   * */
  onReadAll?: () => void;
  /**
   * @description флаг для отображения кнопки "Отметить все как прочтенные"
   * @default true
   * */
  isReadAllButtonVisible?: boolean;
  /**
   * @description функция обработки удаления уведомления
   * */
  onDelete?: (id: string | number) => void;
  /**
   * @description функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается
   * */
  onSettingsButtonClick?: () => void;
  /**
   * @description функция обработки смены вкладки
   * */
  onTabChange?: () => void;
};

export const NotificationList = ({
  isOpen,
  title = 'Уведомления',
  notifications,
  unreadNotifications,
  noDataImgSrc,
  noDataImgAlt,
  isInitialUnreadOnly = false,
  headerContent,
  onClose,
  onDelete,
  onReadAll,
  isReadAllButtonVisible = true,
  onSettingsButtonClick,
  onTabChange,
}: NotificationListProps) => {
  const [isUnreadOnly, setIsUnreadOnly] = useState(isInitialUnreadOnly);
  const tabIndex = isUnreadOnly ? 0 : 1;
  const viewedIds = useRef<Set<number | string>>(new Set());
  const data = useMemo(() => {
    if (unreadNotifications && isUnreadOnly) {
      return unreadNotifications;
    }

    return notifications;
  }, [unreadNotifications, isUnreadOnly, notifications]);

  const handleToggleUnreadOnly = () => {
    setIsUnreadOnly((prev) => !prev);

    if (onTabChange) {
      onTabChange();
    }
  };

  const handleView = (id: string | number) => {
    viewedIds.current.add(id);
  };

  const handleClose = () => {
    onClose(Array.from(viewedIds.current));
    viewedIds.current.clear();
  };

  const renderContent = () => {
    if (data.length) {
      return (
        <>
          <NotificationListMain>
            {data.map((notification) => (
              <NotificationListItem
                key={notification.id}
                {...notification}
                onDelete={onDelete}
                onViewNotification={handleView}
              />
            ))}
          </NotificationListMain>
          <NotificationListFooter
            onReadAllButtonClick={onReadAll}
            isReadAllButtonVisible={isReadAllButtonVisible}
            isReadAllButtonDisabled={unreadNotifications?.length === 0}
          />
        </>
      );
    }

    return (
      <NotificationListEmpty
        isUnreadOnly={isUnreadOnly}
        noDataImgSrc={noDataImgSrc}
        noDataImgAlt={noDataImgAlt}
      />
    );
  };

  return (
    <NotificationListDialog open={isOpen} onClose={handleClose}>
      <NotificationListHeader
        title={title}
        onClose={handleClose}
        justifyContent="flex-end"
      >
        {headerContent}
        <NotificationListSettingsButton onClick={onSettingsButtonClick} />
      </NotificationListHeader>
      {unreadNotifications && (
        <NotificationListTabs
          onChange={handleToggleUnreadOnly}
          tabIndex={tabIndex}
          notificationsCount={notifications.length}
          unreadNotificationsCount={unreadNotifications?.length || 0}
        />
      )}
      {renderContent()}
    </NotificationListDialog>
  );
};
