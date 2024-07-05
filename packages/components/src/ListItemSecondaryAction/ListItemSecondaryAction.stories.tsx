import { HomeOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

import { ListItemSecondaryAction } from './ListItemSecondaryAction';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof ListItemSecondaryAction> = {
  title: 'Components/List/ListItemSecondaryActionItem',
  component: ListItemSecondaryAction,
};

export default meta;

type Story = StoryObj<typeof ListItemSecondaryAction>;

export const Interaction: Story = {
  args: {
    children: <HomeOutlineMd color="primary" />,
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
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem secondaryAction={<HomeOutlineMd color="primary" />}>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </List>
  );
};
