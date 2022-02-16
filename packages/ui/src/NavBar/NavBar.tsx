import {
  ChevronDOutlineMd,
  ChevronUpOutlineMd,
  DotOutlineSm,
} from '@astral/icons';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

export const NavBar = ({ links }: any) => {
  return (
    <>
      <List>
        {links.map((link: any) => (
          <NavBar.Router link={link} />
        ))}
      </List>
    </>
  );
};

NavBar.Router = ({ link }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{link.icon}</ListItemIcon>
        <ListItemText>{link.title}</ListItemText>
        {link.children && open ? <ChevronUpOutlineMd /> : <ChevronDOutlineMd />}
      </ListItemButton>
      {link.children && (
        <NavBar.SubRouter children={link.children} open={open} />
      )}
    </>
  );
};

NavBar.SubRouter = ({ children, open }: any) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List>
        {children.map((child: any) => (
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DotOutlineSm />
            </ListItemIcon>
            <ListItemText primary={child.title} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
};
