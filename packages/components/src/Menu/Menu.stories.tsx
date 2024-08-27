import { type MouseEvent, useCallback, useMemo, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
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

/**
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21288-190921)
 * ### [Guide]()
 */

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu',
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Interaction: Story = {
  args: {
    title: 'Menu',
    open: true,
    children: [
      <MenuItem>
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        Item 1
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <CompanyOutlineMd />
        </ListItemIcon>
        Item 2
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        Item 3
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        Item 4
      </MenuItem>,
    ],
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
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
