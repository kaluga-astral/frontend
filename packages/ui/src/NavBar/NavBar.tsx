import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  DotOutlineSm,
} from '@astral/icons';
import { useState } from 'react';

import { Collapse } from '../Collapse';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

export const NavBar = ({ children }: any) => {
  return <List>{children}</List>;
};

NavBar.Route = ({ icon, title, children, selected }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem selected={selected} onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{title}</ListItemText>

        {children && open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
      </ListItem>
      <Collapse in={open}>
        <List>{children}</List>
      </Collapse>
    </>
  );
};

NavBar.SubRoute = ({ children, selected }: any) => {
  return (
    <ListItem selected={selected}>
      <ListItemIcon>
        <DotOutlineSm />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};
