import { Tab } from '../../Tab';
import { Tabs } from '../../Tabs';
import { styled } from '../../styles';

export const NotificationListTabsRoot = styled(Tabs)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(0, 6)};
`;

export const NotificationListTabsTab = styled(Tab)`
  color: ${({ theme }) => theme.palette.grey[900]};
`;
