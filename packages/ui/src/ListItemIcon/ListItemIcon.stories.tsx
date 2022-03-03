import { HomeOutlineMd } from '@astral/icons';
import { Story } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemText } from '../ListItemText';

import { ListItemIcon } from './ListItemIcon';

export default {
  title: 'Components/ListItemIcon',
  component: ListItemIcon,
};

const Template: Story = () => {
  return (
    <List>
      <ListItem selected={0 === 0}>
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
