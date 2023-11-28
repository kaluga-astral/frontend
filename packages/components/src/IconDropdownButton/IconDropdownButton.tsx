import { ClickAwayListener } from '@mui/material';
import { type ReactNode, forwardRef } from 'react';

import { useMenu } from '../hooks';
import { IconButton, type IconButtonProps } from '../IconButton';
import { Menu } from '../Menu';

export type IconDropdownButtonProps = IconButtonProps & {
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
