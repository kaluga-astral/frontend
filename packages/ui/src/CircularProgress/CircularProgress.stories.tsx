import { Story } from '@storybook/react';

import { CircularProgress } from './CircularProgress';

export default {
  title: 'Components/CircularProgress',
  component: CircularProgress,
};

const Template: Story = (args) => <CircularProgress {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  size: 'medium',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};

export const Showcase: Story = (args) => <CircularProgress {...args} />;

Showcase.args = {
  color: 'inverted',
  size: 'medium',
};

Showcase.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: '#B7C2CE' },
      { name: 'light', value: '#EBEEF1' },
    ],
  },
};
