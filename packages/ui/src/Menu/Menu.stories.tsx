import React from 'react';
import { Story } from '@storybook/react';

import { Button, MenuItem } from '../index';

import { Menu } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const Template: Story = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        variant="contained"
        color="primary"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Пункт меню 1</MenuItem>
        <MenuItem onClick={handleClose}>Пункт меню 2</MenuItem>
        <MenuItem onClick={handleClose}>Пункт меню 3</MenuItem>
        <MenuItem onClick={handleClose}>Пункт меню 4</MenuItem>
        <MenuItem onClick={handleClose}>Пункт меню 5</MenuItem>
        <MenuItem onClick={handleClose}>Пункт меню 6</MenuItem>
      </Menu>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
