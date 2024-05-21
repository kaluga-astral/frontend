import { HomeOutlineMd } from '@astral/icons';
import { type StoryFn } from '@storybook/react';
import { useState } from 'react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { Chevron } from '../Chevron';

import { Collapse } from './Collapse';

export default {
  title: 'Components/Collapse',
  component: Collapse,
};

const Template: StoryFn = () => {
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

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
