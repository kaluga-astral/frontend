import { Tabs, TabsProps } from '@mui/material';

import { styled } from '../styles';

export const StyledTabs = styled(Tabs)<TabsProps>`
  .MuiTabs-indicator {
    border-radius: ${({ theme }) => theme.shape.small};
  }
`;
