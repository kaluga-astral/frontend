import { type MouseEvent, useCallback, useMemo, useState } from 'react';
import { type StoryFn } from '@storybook/react';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { Button } from '../Button';
import { ListItemIcon } from '../ListItemIcon';
import { MenuItem } from '../MenuItem';

import { Menu } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const Template: StoryFn = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button variant="text" onClick={handleClick}>
        Profile
      </Button>
      <Menu
        title="Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ProfileOutlineMd />
          </ListItemIcon>
          Мой профиль
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CompanyOutlineMd />
          </ListItemIcon>
          Мои организации
        </MenuItem>
        <MenuItem divider onClick={handleClose}>
          <ListItemIcon>
            <SettingsFillMd />
          </ListItemIcon>
          Настройки
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <QuitOutlineMd />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
