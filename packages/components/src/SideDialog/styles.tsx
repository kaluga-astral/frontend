import type { DrawerProps } from '@mui/material';
import { Drawer, drawerClasses } from '@mui/material';

import { styled } from '../styles';
import type { WithoutEmotionSpecific } from '../types';

export const StyledDrawer = styled(Drawer)<WithoutEmotionSpecific<DrawerProps>>`
  height: 100vh;
  .${drawerClasses.paper} {
    width: 30%;
  }
`;
