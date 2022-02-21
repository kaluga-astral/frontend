import { Story } from '@storybook/react';

import { ListItemButton } from '../ListItemButton';
import { ListItemText } from '../ListItemText';
import { List } from '../List';
import { ListItem } from '../ListItem';

import { Divider } from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
};

const Template: Story = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItemButton>
        <ListItemText primary="Button" />
      </ListItemButton>
      <Divider light />
      <ListItemButton>
        <ListItemText primary="Button" />
      </ListItemButton>
      <Divider />
    </List>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
