import { useContext, useMemo, useRef, useState } from 'react';

import { ContentState } from '../ContentState';
import { ConfigContext } from '../ConfigProvider';

import { ListItem } from './ListItem';
import { Tabs } from './Tabs';
import { type Notification, type NotificationListType } from './types';
import { Footer, Header, List, StyledSideDialog } from './styles';
import { Empty } from './Empty';
import { SettingsButton } from './SettingsButton';

export type NotificationListProps = {
  /**
   * флаг управления отображением уведомлений
   * */
  isOpen: boolean;
  /**
   * Заголовок списка уведомлений
   * */
  title?: string;
  /**
   * флаг загрузки данных
   * */
  isLoading?: boolean;
  /**
   * флаг ошибки
   * */
  isError?: boolean;
  /**
   * Сообщение об ошибке
   * */
  errorMessage?: string;
  /**
   * список уведомлений
   * */
  notifications: Notification[];
  /**
   * список непрочитанных уведомлений
   * */
  unreadNotifications?: Notification[];
  /**
   * свойство определяет, какие уведомления выводить при открытии списка, все/непрочитанные
   * */
  initialListType?: NotificationListType;
  /**
   * слот для отображения дополнительных компонентов в заголовке
   * */
  headerContent?: React.ReactNode;
  /**
   * слот для отображения дополнительных компонентов в подвале
   * */
  footerContent?: React.ReactNode;
  /**
   * флаг для отображения кнопки настроек, если не передавать, то кнопка не отображается
   * */
  isSettingsButtonVisible?: boolean;
  /**
   * функция для закрытия уведомлений, передает id уведомлений, попавших во viewport
   * */
  onClose: (viewedIds: string[]) => void;
  /**
   * функция обработки удаления уведомления
   * */
  onDelete?: (id: string) => void;
  /**
   * функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается
   * */
  onSettingsButtonClick?: () => void;
  /**
   * функция обработки смены вкладки
   * */
  onTabChange?: () => void;
  /**
   * функция обработки нажатия на кнопку "Повторить запрос"
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
  footerContent,
  isSettingsButtonVisible = true,
  onClose,
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

  const isEmptyData = data.length === 0;
  const isTabsVisible = Boolean(unreadNotifications);

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

  return (
    <StyledSideDialog open={isOpen} onClose={handleClose}>
      <Header title={title} onClose={handleClose} justifyContent="flex-end">
        {headerContent}
        {isSettingsButtonVisible && (
          <SettingsButton onClick={onSettingsButtonClick} />
        )}
      </Header>
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
        {isTabsVisible && (
          <Tabs
            onChange={handleTabChange}
            listType={listType}
            notificationsCount={notifications.length}
            unreadNotificationsCount={unreadNotifications?.length || 0}
          />
        )}
        {isEmptyData ? (
          <Empty listType={listType} noDataImgSrc={imagesMap.noDataImgSrc} />
        ) : (
          <>
            <List>
              {data.map((notification) => (
                <ListItem
                  key={notification.id}
                  {...notification}
                  onDelete={onDelete}
                  onViewNotification={handleView}
                  isDeleteButtonVisible={Boolean(onDelete)}
                />
              ))}
            </List>
            {footerContent && <Footer>{footerContent}</Footer>}
          </>
        )}
      </ContentState>
    </StyledSideDialog>
  );
};
