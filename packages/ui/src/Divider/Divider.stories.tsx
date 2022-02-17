import { Story } from '@storybook/react';

import { Divider } from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
};

const Template: Story = () => {
  return (
    <>
      <Divider></Divider>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
