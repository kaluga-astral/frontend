import { ClickAwayListener } from '@mui/material';
import { forwardRef } from 'react';

import { useMenu } from '../hooks';
import { Menu } from '../Menu';
import { Button, ButtonProps } from '../Button';
import { Chevron } from '../Chevron';

export type DropdownButtonProps = Omit<ButtonProps, 'endIcon' | 'loading'> & {
  /**
   * Название кнопки
   */
  name: string;
};

export const DropdownButton = forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(({ children, name, ...props }, ref) => {
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  return (
    <>
      <ClickAwayListener ref={ref} onClickAway={handleCloseMenu}>
        <Button
          {...props}
          ref={anchorRef}
          onClick={handleOpenMenu}
          endIcon={<Chevron isActive={open} />}
        >
          {name}
        </Button>
      </ClickAwayListener>
      <Menu open={open} anchorEl={anchorRef.current}>
        {children}
      </Menu>
    </>
  );
});
