import { InfoFillSm } from '@astral/icons';
import { Avatar } from '@mui/material';
import { type StoryFn } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemText } from '../ListItemText';
import { ListSubheader } from '../ListSubheader';

import { ListItemAvatar } from './ListItemAvatar';

export default {
  title: 'Components/List/ListItemAvatar',
  component: ListItemAvatar,
};

const Template: StoryFn = () => {
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

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
