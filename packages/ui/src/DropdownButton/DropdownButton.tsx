import { MouseEvent, forwardRef, useState } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <>
      <DropdownButtonWrapper
        ref={ref}
        {...props}
        onClick={handleOpenMenu}
        selected={open}
        endIcon={<ChevronDOutlineMd />}
      >
        {name}
      </DropdownButtonWrapper>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClick={handleCloseMenu}
        onClose={handleCloseMenu}
      >
        {children}
      </Menu>
    </>
  );
});
