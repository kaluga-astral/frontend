import { type Meta } from '@storybook/react';

import { ListItemButton } from '../ListItemButton';
import { ListItemText } from '../ListItemText';
import { List } from '../List';
import { ListItem } from '../ListItem';

import { Divider } from './Divider';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
};

export default meta;

export const Example = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItemButton>
        <ListItemText primary="Button" />
      </ListItemButton>
      <Divider light />
      <ListItemButton>
        <ListItemText primary="Button" />
      </ListItemButton>
      <Divider />
    </List>
  );
};