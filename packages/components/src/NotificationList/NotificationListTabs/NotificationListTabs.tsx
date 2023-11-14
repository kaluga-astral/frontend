import { StyledTab, StyledTabs } from './styles';

type NotificationListTabsProps = {
  isUnreadOnly: boolean;
  unreadNotificationsCount: number;
  notificationsCount: number;
  onToggleUnreadOnly: () => void;
};

export const NotificationListTabs = ({
  isUnreadOnly,
  notificationsCount,
  unreadNotificationsCount,
  onToggleUnreadOnly,
}: NotificationListTabsProps) => {
  return (
    <StyledTabs value={isUnreadOnly ? 0 : 1} onChange={onToggleUnreadOnly}>
      <StyledTab label={`Непрочитанные (${unreadNotificationsCount})`} />
      <StyledTab label={`Все (${notificationsCount})`} />
    </StyledTabs>
  );
};
