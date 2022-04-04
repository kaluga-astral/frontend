import { DrawerProps } from '@mui/material';
import { Drawer as MuiDrawer } from '@mui/material';

import { styled } from '../styles';

export const StyledDrawer = styled(MuiDrawer)<DrawerProps>`
  .MuiPaper-root {
    width: 30%;
  }
  height: 100vh;
`;
