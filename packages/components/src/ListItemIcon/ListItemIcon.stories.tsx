import { HomeOutlineMd } from '@astral/icons';
import { type StoryFn } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemText } from '../ListItemText';

import { ListItemIcon } from './ListItemIcon';

export default {
  title: 'Components/List/ListItemIcon',
  component: ListItemIcon,
};

const Template: StoryFn = () => {
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
