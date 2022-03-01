import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  DotOutlineSm,
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
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <List subheader={<ListSubheader>Список ссылок</ListSubheader>}>
        <Link href="/">
          <ListItemButton
            selected={selectedItem === 0}
            onClick={() => {
              setSelectedItem(0);
            }}
          >
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Главная ( ссылка )</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/">
          <ListItem
            selected={selectedItem === 1}
            onClick={() => {
              setSelectedItem(1);
            }}
          >
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Главная ( ссылка )</ListItemText>
          </ListItem>
        </Link>
        <Link href="https://www.yandex.com/">
          <ListItemButton
            selected={selectedItem === 2}
            onClick={() => {
              setSelectedItem(2);
            }}
          >
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Яндекс</ListItemText>
          </ListItemButton>
        </Link>
      </List>
      <List
        subheader={
          <ListSubheader>
            Выпадающий список с активными элементами
          </ListSubheader>
        }
      >
        <ListItem onClick={handleClick}>
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Транспорт</ListItemText>
          {open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
        </ListItem>
        <Collapse in={open}>
          <List>
            <ListItem
              selected={selectedItem === 3}
              onClick={() => {
                setSelectedItem(3);
              }}
            >
              <ListItemIcon>
                <DotOutlineSm />
              </ListItemIcon>
              <ListItemText>Машины</ListItemText>
            </ListItem>
            <ListItem
              selected={selectedItem === 4}
              onClick={() => {
                setSelectedItem(4);
              }}
            >
              <ListItemIcon>
                <DotOutlineSm />
              </ListItemIcon>
              <ListItemText>Велосипеды</ListItemText>
            </ListItem>
            <ListItemButton
              selected={selectedItem === 5}
              onClick={() => {
                setSelectedItem(5);
              }}
            >
              <ListItemIcon>
                <DotOutlineSm />
              </ListItemIcon>
              <ListItemText>Мотоциклы</ListItemText>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
