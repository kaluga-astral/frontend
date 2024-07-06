import { type Meta, type StoryObj } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';

import { ListItemText } from './ListItemText';

const meta: Meta<typeof ListItemText> = {
  title: 'Components/List/ListItemText',
  component: ListItemText,
};

export default meta;

type Story = StoryObj<typeof ListItemText>;

export const Interaction: Story = {
  args: {
    primary: 'Text',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
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
