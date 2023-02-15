import { Story } from '@storybook/react';

import { Button } from '../Button';

import { Badge } from './Badge';

import { BadgeProps } from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
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

Default.parameters = {
  controls: { expanded: true },
};
