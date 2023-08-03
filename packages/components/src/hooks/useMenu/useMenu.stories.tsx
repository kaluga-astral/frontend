import { Meta } from '@storybook/react';
import { ClickAwayListener } from '@mui/material';

import { Menu } from '../../Menu';
import { MenuItem } from '../../MenuItem';
import { Button } from '../../Button';

import { useMenu } from './useMenu';

const meta: Meta = {
  title: 'Hooks/useMenu',
};

export default meta;

export const Example = () => {
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  return (
    <>
      <ClickAwayListener onClickAway={handleCloseMenu}>
        <Button ref={anchorRef} onClick={handleOpenMenu}>
          Click me
        </Button>
      </ClickAwayListener>
      <Menu open={open} anchorEl={anchorRef.current}>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
      </Menu>
    </>
  );
};
