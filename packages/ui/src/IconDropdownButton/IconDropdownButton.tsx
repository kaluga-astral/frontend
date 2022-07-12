import { ClickAwayListener } from '@mui/material';
import { ReactNode, forwardRef } from 'react';

import { useMenu } from '../hooks';
import { IconButton } from '../IconButton';
import { Menu } from '../Menu';
import { BaseButtonProps } from '../ButtonBase';

export type IconDropdownButtonProps = BaseButtonProps & {
  /**
   * Иконка кнопки
   */
  icon: ReactNode;
};

export const IconDropdownButton = forwardRef<
  HTMLButtonElement,
  IconDropdownButtonProps
>(({ children, icon, ...props }, ref) => {
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu(ref);

  return (
    <>
      <ClickAwayListener onClickAway={handleCloseMenu} mouseEvent="onMouseDown">
        <IconButton
          {...props}
          ref={anchorRef}
          onClick={handleOpenMenu}
          selected={open}
        >
          {icon}
        </IconButton>
      </ClickAwayListener>
      <Menu open={open} anchorEl={anchorRef.current}>
        {children}
      </Menu>
    </>
  );
});
