import { ClickAwayListener } from '@mui/material';
import { forwardRef } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { useMenu } from '../hooks';
import { Menu } from '../Menu';
import { ButtonProps } from '../Button';

import { DropdownButtonWrapper } from './styles';

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
        <DropdownButtonWrapper
          {...props}
          ref={anchorRef}
          onClick={handleOpenMenu}
          selected={open}
          endIcon={<ChevronDOutlineMd />}
        >
          {name}
        </DropdownButtonWrapper>
      </ClickAwayListener>
      <Menu open={open} anchorEl={anchorRef.current}>
        {children}
      </Menu>
    </>
  );
});
