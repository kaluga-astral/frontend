import { Story } from '@storybook/react';

import { ListItemButton } from './ListItemButton';

export default {
  title: 'Components/ListItemButton',
  component: ListItemButton,
};

const Template: Story = () => {
  return (
    <>
      <ListItemButton></ListItemButton>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
