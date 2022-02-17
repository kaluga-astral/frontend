import { Story } from '@storybook/react';

import { Collapse } from './Collapse';

export default {
  title: 'Components/Collapse',
  component: Collapse,
};

const Template: Story = () => {
  return (
    <>
      <Collapse></Collapse>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
