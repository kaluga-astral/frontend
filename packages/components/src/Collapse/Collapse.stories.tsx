import { HomeOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { Chevron } from '../Chevron';

import { Collapse } from './Collapse';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=1419-36705&t=yQqm76BDLLq6X8aL-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const Interaction: Story = {
  args: {
    children: 'Content',
    in: true,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem onClick={handleClick}>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        <Chevron isActive={open} />
      </ListItem>
      <Collapse in={open}>
        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Collapsed" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Collapsed" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};
