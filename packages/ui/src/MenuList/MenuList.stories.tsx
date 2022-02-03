import { Story } from '@storybook/react';
import { ListItemText } from '@mui/material';

import { MenuItem } from '../index';

import { MenuList } from './MenuList';

export default {
  title: 'Components/MenList',
  component: MenuList,
};

const Template: Story = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemText>Пункт меню 1</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText>Пункт меню 2</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText>Пункт меню 3</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText>Пункт меню 4</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText>Пункт меню 5</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemText>Пункт меню 6</ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
