import { SyntheticEvent } from 'react';

import { StyledTab, StyledTabs } from './styles';

type NotificationListTabsProps = {
  tabIndex: number;
  unreadNotificationsCount: number;
  notificationsCount: number;
  onChange: (event: SyntheticEvent<Element, Event>, value: number) => void;
};

export const NotificationListTabs = ({
  tabIndex,
  notificationsCount,
  unreadNotificationsCount,
  onChange,
}: NotificationListTabsProps) => {
  return (
    <StyledTabs value={tabIndex} onChange={onChange}>
      <StyledTab label={`Непрочитанные (${unreadNotificationsCount})`} />
      <StyledTab label={`Все (${notificationsCount})`} />
    </StyledTabs>
  );
};
