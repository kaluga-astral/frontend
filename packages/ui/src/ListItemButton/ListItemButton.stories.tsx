import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  HomeOutlineMd,
} from '@astral/icons';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { List } from '../List';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { ListItem } from '../ListItem';
import { Collapse } from '../Collapse';

import { ListItemButton } from './ListItemButton';

export default {
  title: 'Components/ListItemButton',
  component: ListItemButton,
};

const Template: Story = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <ListItemButton selected>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="ListItemButton" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="ListItemButton" />
        {open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText primary="CollapsedListItem" />
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
