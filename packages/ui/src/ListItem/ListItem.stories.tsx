import { Story } from '@storybook/react';

import { ListItem } from './ListItem';

export default {
  title: 'Components/ListItem',
  component: ListItem,
};

const Template: Story = () => {
  return (
    <>
      <ListItem></ListItem>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
