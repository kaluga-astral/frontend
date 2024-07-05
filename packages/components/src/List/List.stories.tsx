import { DotOutlineSm, HomeOutlineMd } from '@astral/icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Link } from '@mui/material';

import { Chevron } from '../Chevron';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { Collapse } from '../Collapse';
import { ListSubheader } from '../ListSubheader';
import { ListItemButton } from '../ListItemButton';
import { IconButton } from '../IconButton';

import { List } from './List';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Interaction: Story = {
  args: {
    children: (<><ListItem>Item 1</ListItem> <ListItem>Item 2</ListItem></>),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<null | number>(null);
  const [listOpen, setListOpen] = useState(true);

  const handleListCollapse = () => {
    setListOpen(!listOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        subheader={<ListSubheader>Список ссылок (ListItem) </ListSubheader>}
      >
        <Link href="/">
          <ListItem
            selected={selectedItem === 0}
            onClick={() => {
              setSelectedItem(0);
            }}
          >
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Главная ( ссылка )</ListItemText>
          </ListItem>
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
          <ListItem
            selected={selectedItem === 2}
            onClick={() => {
              setSelectedItem(2);
            }}
          >
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Яндекс</ListItemText>
          </ListItem>
        </Link>
      </List>
      <List
        subheader={
          <ListSubheader>Список Кнопок (ListItemButton) </ListSubheader>
        }
      >
        <ListItemButton
          selected={selectedItem === 11}
          onClick={() => {
            setSelectedItem(11);
          }}
        >
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Главная </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedItem === 12}
          onClick={() => {
            setSelectedItem(12);
          }}
        >
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Главная </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedItem === 13}
          onClick={() => {
            setSelectedItem(13);
          }}
        >
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Яндекс</ListItemText>
        </ListItemButton>
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
          <Chevron isActive={open} />
        </ListItem>
        <Collapse in={open} orientation="vertical">
          <List disablePadding>
            <ListItemButton
              selected={selectedItem === 3}
              onClick={() => {
                setSelectedItem(3);
              }}
            >
              <ListItemIcon>
                <DotOutlineSm />
              </ListItemIcon>
              <ListItemText>Машины</ListItemText>
            </ListItemButton>
            <ListItemButton
              selected={selectedItem === 4}
              onClick={() => {
                setSelectedItem(4);
              }}
            >
              <ListItemIcon>
                <DotOutlineSm />
              </ListItemIcon>
              <ListItemText>Велосипеды</ListItemText>
            </ListItemButton>
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
      <List
        subheader={
          <ListSubheader
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Сворачиваемый список
            <IconButton
              variant="text"
              onClick={handleListCollapse}
              style={{ transform: 'rotate(270deg)' }}
            >
              <Chevron isActive={listOpen} />
            </IconButton>
          </ListSubheader>
        }
      >
        <Collapse in={listOpen} orientation="horizontal" collapsedSize={56}>
          <List disablePadding>
            <ListItemButton
              selected={selectedItem === 11}
              onClick={() => {
                setSelectedItem(11);
              }}
            >
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>Главная</ListItemText>
            </ListItemButton>
            <ListItemButton
              selected={selectedItem === 12}
              onClick={() => {
                setSelectedItem(12);
              }}
            >
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>
                Главная новая страница для определенно ненужного сайта
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              selected={selectedItem === 13}
              onClick={() => {
                setSelectedItem(13);
              }}
            >
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>Яндекс</ListItemText>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};
