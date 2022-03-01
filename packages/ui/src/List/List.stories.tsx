import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  HomeOutlineMd,
} from '@astral/icons';
import { Story } from '@storybook/react';
import { useState } from 'react';
import { Link } from '@mui/material';

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
    <List subheader={<ListSubheader>Компонент Списка</ListSubheader>}>
      <Link href="/">
        <ListItemButton selected>
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Главная ( ссылка )</ListItemText>
        </ListItemButton>
      </Link>
      <Link href="/">
        <ListItem>
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Главная ( ссылка )</ListItemText>
        </ListItem>
      </Link>
      <Link href="https://www.yandex.com/">
        <ListItemButton>
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Яндекс</ListItemText>
        </ListItemButton>
      </Link>

      <ListItem onClick={handleClick}>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText>Транспорт</ListItemText>
        {open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
      </ListItem>
      <Collapse in={open}>
        <List>
          <Link href="/cars">
            <ListItem>
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>Машины</ListItemText>
            </ListItem>
          </Link>
          <Link href="/bicycle">
            <ListItem selected>
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>Велосипеды ( selected )</ListItemText>
            </ListItem>
          </Link>
          <Link href="/motorcycles">
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>Мотоциклы</ListItemText>
            </ListItemButton>
          </Link>
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
