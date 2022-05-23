import { Story } from '@storybook/react';
import { Stack } from '@mui/material';
import { ProductsFillMd } from '@astral/icons';

import { MenuItem } from '../MenuItem';

import {
  IconDropdownButton,
  IconDropdownButtonProps,
} from './IconDropdownButton';

export default {
  title: 'Components/IconDropdownButton',
  component: IconDropdownButton,
};

const Template: Story<IconDropdownButtonProps> = (args) => (
  <Stack gap={1}>
    <Stack gap={3} direction="row" alignItems="center">
      <IconDropdownButton {...args}>
        <MenuItem onClick={() => console.log('v1')}>Вариант выбора 1</MenuItem>
        <MenuItem onClick={() => console.log('v2')}>Вариант выбора 2</MenuItem>
        <MenuItem onClick={() => console.log('v3')}>Вариант выбора 3</MenuItem>
      </IconDropdownButton>
    </Stack>
  </Stack>
);

export const Default = Template.bind({});

Default.args = {
  icon: <ProductsFillMd />,
};
