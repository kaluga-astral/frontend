import { Story } from '@storybook/react';

import { ListItemSecondaryAction } from './ListItemSecondaryAction';

export default {
  title: 'Components/ListItemSecondaryActionItem',
  component: ListItemSecondaryAction,
};

const Template: Story = () => {
  return (
    <>
      <ListItemSecondaryAction></ListItemSecondaryAction>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
