import { type Meta, type StoryObj } from '@storybook/react';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { Divider } from '../Divider';
import { ListItemText } from '../ListItemText';
import { ListItemIcon } from '../ListItemIcon';
import { Typography } from '../Typography';
import { MenuItem } from '../index';

import { MenuList } from './MenuList';

/**
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=3095-64334)
 * ### [Guide]()
 */

const meta: Meta<typeof MenuList> = {
  title: 'Components/MenuList',
  component: MenuList,
};

export default meta;

type Story = StoryObj<typeof MenuList>;

export const Interaction: Story = {
  args: {
    children: [
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        <ListItemText>item 1</ListItemText>
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <CompanyOutlineMd />
        </ListItemIcon>
        <ListItemText>item 2</ListItemText>
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        <ListItemText>item 3</ListItemText>
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <QuitOutlineMd />
        </ListItemIcon>
        <ListItemText>item 4</ListItemText>
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
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        <ListItemText>Мой профиль</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <CompanyOutlineMd />
        </ListItemIcon>
        <ListItemText>Мои организации</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        <ListItemText>Настройки</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <QuitOutlineMd />
        </ListItemIcon>
        <ListItemText>Выйти</ListItemText>
      </MenuItem>
    </MenuList>
  );
};
