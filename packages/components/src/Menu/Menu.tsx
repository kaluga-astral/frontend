import { Menu as MuiMenu, type MenuProps as MuiMenuProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { useViewportType } from '../hooks/useViewportType';
import { BottomDrawer } from '../BottomDrawer';
import { MenuList } from '../MenuList';

export type MenuProps = WithoutEmotionSpecific<MuiMenuProps> & {
  /**
   * Заголовок для отображения в мобильной версии
   */
  title?: string;
};

export const Menu = ({
  children,
  onClose,
  open,
  title,
  ...restProps
}: MenuProps) => {
  const { isMobile } = useViewportType();

  if (isMobile) {
    return (
      <BottomDrawer title={title} onClose={onClose} open={open}>
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
