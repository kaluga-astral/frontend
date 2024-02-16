import { Menu as MuiMenu, type MenuProps as MuiMenuProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { useViewportType } from '../hooks/useViewportType';
import { BottomDrawer } from '../BottomDrawer';
import { MenuList } from '../MenuList';

export type MenuProps = WithoutEmotionSpecific<MuiMenuProps>;

export const Menu = ({ children, onClose, open, ...restProps }: MenuProps) => {
  const { isMobile } = useViewportType();

  if (isMobile) {
    return (
      <BottomDrawer onClose={onClose} open={open}>
        <MenuList>{children}</MenuList>
      </BottomDrawer>
    );
  }

  return (
    <MuiMenu open={open} onClose={onClose} {...restProps}>
      {children}
    </MuiMenu>
  );
};
