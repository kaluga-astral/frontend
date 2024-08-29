import { Drawer, type DrawerProps, drawerClasses } from '@mui/material';

import { styled } from '../styles';
import { type WithoutEmotionSpecific } from '../types';

import { SIZES } from './constants';

type SideDialogSize = 'xs' | 'sm' | 'md' | 'lg';

const getSize = (size: SideDialogSize) => {
  return SIZES[size] || SIZES.sm;
};

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => !['$size'].includes(prop),
})<{ $size: SideDialogSize } & WithoutEmotionSpecific<DrawerProps>>`
  height: 100vh;

  @supports (height: 100dvh) {
    height: 100dvh;
  }
  .${drawerClasses.paper} {
    width: ${({ $size }) => getSize($size)};
  }
`;
