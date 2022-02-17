import { Story } from '@storybook/react';

import { ListSubheader } from './ListSubheader';

export default {
  title: 'Components/ListSubheader',
  component: ListSubheader,
};

const Template: Story = () => {
  return (
    <>
      <ListSubheader></ListSubheader>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
