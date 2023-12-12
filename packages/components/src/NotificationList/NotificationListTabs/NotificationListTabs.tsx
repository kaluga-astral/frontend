import { SyntheticEvent } from 'react';

import { NotificationListType } from '../types';

import { NotificationListTabsRoot, NotificationListTabsTab } from './styles';

type NotificationListTabsProps = {
  listType: NotificationListType;
  unreadNotificationsCount: number;
  notificationsCount: number;
  onChange: (listType: NotificationListType) => void;
};

export const NotificationListTabs = ({
  listType,
  notificationsCount,
  unreadNotificationsCount,
  onChange,
}: NotificationListTabsProps) => {
  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    value: NotificationListType,
  ) => {
    onChange(value);
  };

  return (
    <NotificationListTabsRoot value={listType} onChange={handleChange}>
      <NotificationListTabsTab
        value="unread"
        label={`Непрочитанные (${unreadNotificationsCount})`}
      />
      <NotificationListTabsTab
        value="all"
        label={`Все (${notificationsCount})`}
      />
    </NotificationListTabsRoot>
  );
};
