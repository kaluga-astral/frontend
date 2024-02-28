import { type SyntheticEvent } from 'react';

import { type NotificationListType } from '../types';

import { StyledTab, StyledTabs } from './styles';

type Props = {
  listType: NotificationListType;
  unreadNotificationsCount: number;
  notificationsCount: number;
  onChange: (listType: NotificationListType) => void;
};

export const Tabs = ({
  listType,
  notificationsCount,
  unreadNotificationsCount,
  onChange,
}: Props) => {
  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    value: NotificationListType,
  ) => {
    onChange(value);
  };

  return (
    <StyledTabs value={listType} onChange={handleChange}>
      <StyledTab
        value="unread"
        label={`Непрочитанные (${unreadNotificationsCount})`}
      />
      <StyledTab value="all" label={`Все (${notificationsCount})`} />
    </StyledTabs>
  );
};
