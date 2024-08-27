import { Drawer, type DrawerProps, drawerClasses } from '@mui/material';

import { styled } from '../styles';
import { type WithoutEmotionSpecific } from '../types';

type SideDialogSize = 'xs' | 'sm' | 'md' | 'lg';

const sizes = {
  xs: '460px',
  sm: '520px',
  md: '620px',
  lg: '800px',
};

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})<{ $size: SideDialogSize } & WithoutEmotionSpecific<DrawerProps>>`
  height: 100vh;

  @supports (height: 100dvh) {
    height: 100dvh;
  }
  .${drawerClasses.paper} {
    width: ${({ $size }) => sizes[$size]};
  }
`;
