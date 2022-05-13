import { Story } from '@storybook/react';
import { Stack } from '@mui/material';
import { MailFillSm } from '@astral/icons';

import { MenuItem } from '../MenuItem';

import { DropdownButton } from './DropdownButton';
import { DropdownButtonProps } from './types';

export default {
  title: 'Components/DropdownButton',
  component: DropdownButton,
};

const Template: Story<DropdownButtonProps> = (args) => (
  <Stack gap={1}>
    <Stack gap={3} direction="row" alignItems="center">
      <DropdownButton {...args}>
        <MenuItem onClick={() => console.log('v1')}>Вариант выбора 1</MenuItem>
        <MenuItem onClick={() => console.log('v2')}>Вариант выбора 2</MenuItem>
        <MenuItem onClick={() => console.log('v3')}>Вариант выбора 3</MenuItem>
      </DropdownButton>
    </Stack>
  </Stack>
);

export const Default = Template.bind({});

Default.args = {
  name: 'Действие',
  startIcon: <MailFillSm />,
};
