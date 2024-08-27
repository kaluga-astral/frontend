import { HomeOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemText } from '../ListItemText';

import { ListItemIcon } from './ListItemIcon';

const meta: Meta<typeof ListItemIcon> = {
  title: 'Components/Data Display/List/ListItemIcon',
  component: ListItemIcon,
};

export default meta;

type Story = StoryObj<typeof ListItemIcon>;

export const Interaction: Story = {
  args: {
    children: <HomeOutlineMd />,
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
      <ListItem selected={0 === 0}>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  );
};
