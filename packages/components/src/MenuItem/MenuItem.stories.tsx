import { type Meta, type StoryObj } from '@storybook/react';
import { ProfileOutlineMd } from '@astral/icons';

import { ListItemIcon } from '../ListItemIcon';
import { MenuList } from '../MenuList';

import { MenuItem, type MenuItemProps } from './MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Menu/MenuItem',
  component: MenuItem,
};

export default meta;

type Story = StoryObj<MenuItemProps>;

export const Interaction: Story = {
  args: {
    selected: true,
    children: 'Menu Item',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Мой профиль
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Выход
      </MenuItem>
    </MenuList>
  );
};

export const Selected = () => {
  return (
    <MenuList>
      <MenuItem selected>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Мой профиль
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Выход
      </MenuItem>
    </MenuList>
  );
};

export const Disabled = () => {
  return (
    <MenuList>
      <MenuItem
        disabled
        tooltipPlacement="left"
        disabledReason="Действие недоступно. Попробуйте позднее"
      >
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Мой профиль
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Выход
      </MenuItem>
    </MenuList>
  );
};
