import { HomeOutlineMd } from '@astral/icons';
import { Story } from '@storybook/react';

import { List } from '../List';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { ListSubheader } from '../ListSubheader';

import { ListItemButton } from './ListItemButton';

export default {
  title: 'Components/ListItemButton',
  component: ListItemButton,
};

const Template: Story = () => {
  return (
    <List subheader={<ListSubheader>Subheader</ListSubheader>}>
      <ListItemButton>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
    </List>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
