import { Drawer, type DrawerProps, drawerClasses } from '@mui/material';

import { styled } from '../styles';
import { type WithoutEmotionSpecific } from '../types';

export const StyledDrawer = styled(Drawer)<WithoutEmotionSpecific<DrawerProps>>`
  height: 100dvh;

  .${drawerClasses.paper} {
    width: 30%;
  }
`;
