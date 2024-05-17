import { type StoryFn } from '@storybook/react';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { Divider } from '../Divider';
import { ListItemText } from '../ListItemText';
import { ListItemIcon } from '../ListItemIcon';
import { MenuItem } from '../index';

import { MenuList } from './MenuList';

export default {
  title: 'Components/Menu/MenuList',
  component: MenuList,
};

const Template: StoryFn = () => {
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

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
