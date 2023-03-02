import { Drawer, DrawerProps } from '@mui/material';

import { styled } from '../styles';
import { WithoutEmotionSpecific } from '../types';

export const StyledDrawer = styled(Drawer)<WithoutEmotionSpecific<DrawerProps>>`
  .MuiDrawer-paper {
    width: 30%;
  }

  height: 100vh;
`;
