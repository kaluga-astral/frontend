import { type Meta, type StoryObj } from '@storybook/react';
import { ProfileOutlineMd } from '@astral/icons';

import { ListItemIcon } from '../ListItemIcon';
import { MenuList } from '../MenuList';

import { MenuItem, type MenuItemProps } from './MenuItem';

/**
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=9187-105430)
 * ### [Guide]()
 */

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
