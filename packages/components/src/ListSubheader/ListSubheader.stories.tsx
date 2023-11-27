import { HomeOutlineMd } from '@astral/icons';
import { type Story } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

import { ListSubheader } from './ListSubheader';

export default {
  title: 'Components/List/ListSubheader',
  component: ListSubheader,
};

const Template: Story = () => {
  return (
    <List subheader={<ListSubheader>Subheader</ListSubheader>}>
      <ListItem>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
