import { type StoryFn } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';

import { ListItemText } from './ListItemText';

export default {
  title: 'Components/List/ListItemText',
  component: ListItemText,
};

const Template: StoryFn = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
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
