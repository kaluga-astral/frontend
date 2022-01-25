import { Story } from '@storybook/react';
import { Loader } from './CircularProgress';

export default {
  title: 'Components/CircularProgress',
  component: Loader,
};

const Template: Story = (args) => <Loader {...args}/>;

export const Default = Template.bind({});

Default.args = {
  color: 'inverted',
  size: 'medium',
};

Default.parameters = {
  controls: { expanded: true },
};
