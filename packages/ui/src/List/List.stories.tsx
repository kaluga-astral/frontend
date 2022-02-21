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

import { List } from './List';

export default {
  title: 'Components/Avatar',
  component: List,
};

export const Template: Story = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List subheader={<ListSubheader>Subheader</ListSubheader>}>
      <ListItem>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
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
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem sx={{ pl: 4 }} active>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
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
