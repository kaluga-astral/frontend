import { Story } from '@storybook/react';

import { ListItemIcon } from './ListItemIcon';

export default {
  title: 'Components/ListItemIcon',
  component: ListItemIcon,
};

const Template: Story = () => {
  return (
    <>
      <ListItemIcon></ListItemIcon>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
