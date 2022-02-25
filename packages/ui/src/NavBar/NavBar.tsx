import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  DotOutlineSm,
} from '@astral/icons';
import { useState } from 'react';

import { Collapse } from '../Collapse';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemButton } from '../ListItemButton';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

export const NavBar = ({ children }: any) => {
  return <List>{children}</List>;
};

NavBar.Item = ({ icon, title, children, selected }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton selected={selected} onClick={handleClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText>{title}</ListItemText>
        {open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
      </ListItemButton>
      <Collapse in={open}>
        <List>{children}</List>
      </Collapse>
    </>
  );
};

NavBar.ItemRoute = ({ children, selected }: any) => (
  <ListItem selected={selected}>
    <ListItemIcon>
      <DotOutlineSm />
    </ListItemIcon>
    <ListItemText>{children}</ListItemText>
  </ListItem>
);

NavBar.Route = ({ icon, children, selected }: any) => (
  <ListItem selected={selected}>
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    <ListItemText>{children}</ListItemText>
  </ListItem>
);
