import { Story } from '@storybook/react';

import { ListItemText } from './ListItemText';

export default {
  title: 'Components/ListItemTextItem',
  component: ListItemText,
};

const Template: Story = () => {
  return (
    <>
      <ListItemText></ListItemText>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
