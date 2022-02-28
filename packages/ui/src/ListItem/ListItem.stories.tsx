import { HomeOutlineMd } from '@astral/icons';
import { Story } from '@storybook/react';

import { List } from '../List';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

import { ListItem } from './ListItem';

export default {
  title: 'Components/ListItem',
  component: ListItem,
};

const Template: Story = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </List>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
