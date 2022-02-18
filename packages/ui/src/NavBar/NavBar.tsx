import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  DotOutlineSm,
} from '@astral/icons';
import { useState } from 'react';

import Badge from '../Badge/Badge';
import { Collapse } from '../Collapse';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

export const NavBar = ({ links, active }: any) => {
  return (
    <>
      <List>
        {links.map(({ icon, title, children }: any) => (
          <NavBar.Router
            icon={icon}
            title={title}
            children={children}
            active={active}
          />
        ))}
      </List>
    </>
  );
};

NavBar.Router = ({ icon, title, children, active }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{title}</ListItemText>
        {children && (
          <Badge
            style={{ marginRight: '8px' }}
            color="error"
            badgeContent={12}
            variant="standard"
          />
        )}

        {children && open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
      </ListItem>
      {children && (
        <NavBar.SubRouter children={children} open={open} active={active} />
      )}
    </>
  );
};

NavBar.SubRouter = ({ children, open }: any) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List>
        {children.map((child: any) => (
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <DotOutlineSm />
            </ListItemIcon>
            <ListItemText primary={child.title} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  );
};
