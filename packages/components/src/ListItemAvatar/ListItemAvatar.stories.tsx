import { InfoFillSm } from '@astral/icons';
import { Avatar } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemText } from '../ListItemText';
import { ListSubheader } from '../ListSubheader';

import { ListItemAvatar } from './ListItemAvatar';

const meta: Meta<typeof ListItemAvatar> = {
  title: 'Components/List/ListItemAvatar',
  component: ListItemAvatar,
};

export default meta;

type Story = StoryObj<typeof ListItemAvatar>;

export const Interaction: Story = {
  args: {
    children: (
      <Avatar>
        <InfoFillSm />
      </Avatar>
    ),
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
        <ListItemAvatar>
          <Avatar>
            <InfoFillSm />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  );
};
