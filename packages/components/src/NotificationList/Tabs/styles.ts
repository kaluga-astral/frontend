import { Tab } from '../../Tab';
import { Tabs } from '../../Tabs';
import { styled } from '../../styles';

export const StyledTabs = styled(Tabs)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(0, 6)};
`;

export const StyledTab = styled(Tab)`
  color: ${({ theme }) => theme.palette.grey[900]};
`;
