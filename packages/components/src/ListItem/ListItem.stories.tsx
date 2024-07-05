import { HomeOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { Link } from '@mui/material';
import { useState } from 'react';

import { List } from '../List';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { ListSubheader } from '../ListSubheader';

import { ListItem } from './ListItem';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof ListItem> = {
  title: 'Components/List/ListItem',
  component: ListItem,
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Interaction: Story = {
  args: {
    children: 'Item',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  return (
    <>
      <List
        subheader={<ListSubheader>Список ссылок (ListItem) </ListSubheader>}
      >
        <Link href="/">
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Ссылка 1</ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Ссылка 2</ListItemText>
          </ListItem>
        </Link>
      </List>
      <List
        subheader={<ListSubheader>Список не ссылок (ListItem) </ListSubheader>}
      >
        <ListItem
          selected={selectedItem === 0}
          onClick={() => {
            setSelectedItem(0);
          }}
        >
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Автомобиль</ListItemText>
        </ListItem>
        <ListItem
          selected={selectedItem === 1}
          onClick={() => {
            setSelectedItem(1);
          }}
        >
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Велосипед</ListItemText>
        </ListItem>
      </List>
    </>
  );
};
