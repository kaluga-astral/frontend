import { HomeOutlineMd } from '@astral/icons';
import { type StoryFn } from '@storybook/react';
import { useState } from 'react';

import { List } from '../List';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { ListItem } from '../ListItem';
import { Chevron } from '../Chevron';
import { Collapse } from '../Collapse';
import { ListSubheader } from '../ListSubheader';

import { ListItemButton } from './ListItemButton';

export default {
  title: 'Components/List/ListItemButton',
  component: ListItemButton,
};

const Template: StoryFn = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        subheader={
          <ListSubheader>Компонент Списка Кнопки selectable</ListSubheader>
        }
      >
        <ListItemButton
          selected={selectedItem === 0}
          onClick={() => {
            setSelectedItem(0);
          }}
        >
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Главная </ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedItem === 1}
          onClick={() => {
            setSelectedItem(1);
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
            Компонент Списка ListItemButton + Collapse
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Транспорт</ListItemText>
          <Chevron isActive={open} />
        </ListItemButton>
        <Collapse in={open}>
          <List>
            <ListItem>
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>Машины</ListItemText>
            </ListItem>
            <ListItem selected>
              <ListItemIcon>
                <HomeOutlineMd />
              </ListItemIcon>
              <ListItemText>Велосипеды ( selected )</ListItemText>
            </ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlineMd />
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
