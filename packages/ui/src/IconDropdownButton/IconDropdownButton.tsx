import { ClickAwayListener } from '@mui/material';
import { ReactNode, forwardRef } from 'react';

import { useMenu } from '../hooks';
import { Menu } from '../Menu';
import { BaseButtonProps } from '../ButtonBase';

import { IconDropdownButtonWrapper } from './styles';

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
      <ClickAwayListener onClickAway={handleCloseMenu}>
        <IconDropdownButtonWrapper
          {...props}
          ref={anchorRef}
          onClick={handleOpenMenu}
          selected={open}
        >
          {icon}
        </IconDropdownButtonWrapper>
      </ClickAwayListener>
      <Menu open={open} anchorEl={anchorRef.current}>
        {children}
      </Menu>
    </>
  );
});
