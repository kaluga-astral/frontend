import { MouseEvent, ReactNode, forwardRef, useState } from 'react';

import { Menu } from '../Menu';
import { BaseButtonProps } from '../ButtonBase';

import { IconDropdownButtonWrapper } from './styles';

export type IconDropdownButtonProps = Omit<BaseButtonProps, 'loading'> & {
  /**
   * Иконка кнопки
   */
  icon: ReactNode;
};

export const IconDropdownButton = forwardRef<
  HTMLButtonElement,
  IconDropdownButtonProps
>(({ children, icon, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <>
      <IconDropdownButtonWrapper
        ref={ref}
        {...props}
        onClick={handleOpenMenu}
        selected={open}
      >
        {icon}
      </IconDropdownButtonWrapper>
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
