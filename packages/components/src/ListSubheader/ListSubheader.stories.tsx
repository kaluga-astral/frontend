import { HomeOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

import { ListSubheader } from './ListSubheader';

const meta: Meta<typeof ListSubheader> = {
  title: 'Components/Data Display/List/ListSubheader',
  component: ListSubheader,
};

export default meta;

type Story = StoryObj<typeof ListSubheader>;

export const Interaction: Story = {
  args: {
    children: 'Subheader',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
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
