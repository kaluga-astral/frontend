import { ClickAwayListener, type PopoverProps } from '@mui/material';
import { forwardRef } from 'react';

import { useMenu } from '../hooks';
import { Menu } from '../Menu';
import { Button, type ButtonProps } from '../Button';
import { Chevron } from '../Chevron';

export type DropdownButtonProps = Omit<ButtonProps, 'endIcon'> & {
  /** Название кнопки */
  name: string;
  /** Пропсы Popover компонента */
  popoverProps?: Omit<PopoverProps, 'open'>;
};

export const DropdownButton = forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(({ children, name, popoverProps, ...props }, ref) => {
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
      <Menu open={open} anchorEl={anchorRef.current} {...popoverProps}>
        {children}
      </Menu>
    </>
  );
});
