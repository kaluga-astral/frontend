import { useContext, useMemo, useRef, useState } from 'react';

import { ContentState } from '../ContentState';
import { ConfigContext } from '../ConfigProvider';

import { NotificationListItem } from './NotificationListItem';
import { NotificationListTabs } from './NotificationListTabs';
import { Notification, NotificationListType } from './types';
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
   * */
  isOpen: boolean;
  /**
   * @description Заголовок списка уведомлений
   * */
  title?: string;
  /**
   * @description флаг загрузки данных
   * */

  isLoading?: boolean;
  /**
   * @description флаг ошибки
   * */
  isError?: boolean;
  /**
   * @description Сообщение об ошибке
   * */
  errorMessage?: string;
  /**
   * @description список уведомлений
   * */
  notifications: Notification[];
  /**
   * @description список непрочитанных уведомлений
   * */
  unreadNotifications?: Notification[];
  /**
   * @description свойство определяет, какие уведомления выводить при открытии списка, все/непрочитанные
   * */
  initialListType?: NotificationListType;
  /**
   * @description слот для отображения дополнительных компонентов в заголовке
   * */
  headerContent?: React.ReactNode;
  /**
   * @description флаг для отображения кнопки "Отметить все как прочтенные"
   * */
  isReadAllButtonVisible?: boolean;
  /**
   * @description флаг для отображения кнопки настроек, если не передавать, то кнопка не отображается
   * */
  isSettingsButtonVisible?: boolean;
  /**
   * @description функция для закрытия уведомлений, передает id уведомлений, попавших во viewport
   * */
  onClose: (viewedIds: string[]) => void;
  /**
   * @description функция обработки нажатия на кнопку "Отметить все как прочтенные"
   * */
  onReadAll?: () => void;
  /**
   * @description функция обработки удаления уведомления
   * */
  onDelete?: (id: string) => void;
  /**
   * @description функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается
   * */
  onSettingsButtonClick?: () => void;
  /**
   * @description функция обработки смены вкладки
   * */
  onTabChange?: () => void;

  /**
   * @description функция обработки нажатия на кнопку "Повторить запрос"
   * */
  onRetry?: () => void;
};

export const NotificationList = ({
  isOpen,
  title = 'Уведомления',
  isLoading,
  isError,
  errorMessage,
  notifications,
  unreadNotifications,
  initialListType = 'all',
  headerContent,
  isReadAllButtonVisible = true,
  isSettingsButtonVisible = true,
  onClose,
  onReadAll,
  onDelete,
  onSettingsButtonClick,
  onTabChange,
  onRetry,
}: NotificationListProps) => {
  const { imagesMap } = useContext(ConfigContext);
  const [listType, setListType] =
    useState<NotificationListType>(initialListType);
  const viewedIds = useRef(new Set<string>());
  const data = useMemo(() => {
    if (unreadNotifications && listType === 'unread') {
      return unreadNotifications;
    }

    return notifications;
  }, [unreadNotifications, listType, notifications]);

  const handleTabChange = (type: NotificationListType) => {
    setListType(type);

    if (onTabChange) {
      onTabChange();
    }
  };

  const handleView = (id: string) => {
    viewedIds.current.add(id);
  };

  const handleClose = () => {
    onClose(Array.from(viewedIds.current));
    viewedIds.current.clear();
  };

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
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
                isDeleteButtonVisible={Boolean(onDelete)}
              />
            ))}
          </NotificationListMain>
          {isReadAllButtonVisible && (
            <NotificationListFooter
              onReadAllButtonClick={onReadAll}
              isReadAllButtonDisabled={unreadNotifications?.length === 0}
            />
          )}
        </>
      );
    }

    return (
      <NotificationListEmpty
        listType={listType}
        noDataImgSrc={imagesMap.noDataImgSrc}
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
        {isSettingsButtonVisible && (
          <NotificationListSettingsButton onClick={onSettingsButtonClick} />
        )}
      </NotificationListHeader>
      <ContentState
        isLoading={isLoading}
        isError={isError}
        errorState={{
          imgAlt: '',
          errorList: [errorMessage || ''],
          onRetry: handleRetry,
          imgSrc: imagesMap.defaultErrorImgSrc,
        }}
      >
        {unreadNotifications && (
          <NotificationListTabs
            onChange={handleTabChange}
            listType={listType}
            notificationsCount={notifications.length}
            unreadNotificationsCount={unreadNotifications?.length || 0}
          />
        )}
        {renderContent()}
      </ContentState>
    </NotificationListDialog>
  );
};
