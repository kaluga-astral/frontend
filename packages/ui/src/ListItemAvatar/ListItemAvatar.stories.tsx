import { Story } from '@storybook/react';

import { ListItemAvatar } from './ListItemAvatar';

export default {
  title: 'Components/ListItemAvatar',
  component: ListItemAvatar,
};

const Template: Story = () => {
  return (
    <>
      <ListItemAvatar></ListItemAvatar>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
