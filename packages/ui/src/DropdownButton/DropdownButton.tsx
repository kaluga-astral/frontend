import { MouseEvent, forwardRef, useState } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { Menu } from '../Menu';

import { StyledButton } from './styled';
import { DropdownButtonProps } from './types';

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
      <StyledButton
        ref={ref}
        {...props}
        onClick={handleOpenMenu}
        variant="light"
        pressed={open}
        endIcon={<ChevronDOutlineMd />}
      >
        {name}
      </StyledButton>
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
