import { Story } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
  },
};

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
};
