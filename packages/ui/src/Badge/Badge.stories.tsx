import { Story } from '@storybook/react';

import { Button } from '../Button';

import Badge from './Badge';
import { BadgeProps } from './types';

export default {
  title: 'Components/Badge',
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['grey', 'primary', 'white', 'error', 'errorLight', 'success'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['standard', 'dot'],
    },
  },
};

const Template: Story<BadgeProps> = (args) => (
  <Badge {...args}>
    <Button variant="contained" color="primary">
      Badge
    </Button>
  </Badge>
);

export const Default = Template.bind({});
Default.args = {
  color: 'error',
  badgeContent: 999,
  variant: 'standard',
  invisible: false,
};
