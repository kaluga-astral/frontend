import { Story } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story = (args) => <Button {...args}>Label</Button>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};
Default.parameters = {
  controls: { expanded: true },
};
