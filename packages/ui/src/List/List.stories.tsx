import { Story } from '@storybook/react';

import { List } from './List';

export default {
  title: 'Components/List',
  component: List,
};

const Template: Story = () => {
  return (
    <>
      <List></List>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
