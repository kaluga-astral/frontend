import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  HomeOutlineMd,
} from '@astral/icons';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { Collapse } from '../Collapse';
import { ListSubheader } from '../ListSubheader';
import { ListItemButton } from '../ListItemButton';

import { List } from './List';

export default {
  title: 'Components/List',
  component: List,
};

export const Template: Story = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List subheader={<ListSubheader>Subheader</ListSubheader>}>
      <ListItemButton>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="ListItemButton" />
      </ListItemButton>
      <ListItemButton selected>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="ListItemButton" />
      </ListItemButton>
      <ListItem>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="ListItem" />
      </ListItem>
      <ListItem onClick={handleClick}>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem selected>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
