import { forwardRef, useCallback, useState } from 'react';
import {
  CompanyOutlineMd,
  MenuOffOutlineMd,
  MenuOnOutlineMd,
  ProfileOutlineMd,
  SettingsFillMd,
} from '@astral/icons';
import Collapse from '@mui/material/Collapse';

import { List } from '../../List';
import { ListItem } from '../../ListItem';
import { ListItemIcon } from '../../ListItemIcon';
import { ListItemText } from '../../ListItemText';

import {
  NavListItem,
  SidebarNav,
  SidebarRoot,
  SidebarToggler,
  SidebarTogglerContent,
  SidebarTogglerWrapper,
} from './styled';

export type SidebarProps = {};

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (_props, ref) => {
    const [collapsed, setCollapsed] = useState(true);

    const handleSidebarTogglerClick = useCallback(() => {
      setCollapsed((prevValue) => !prevValue);
    }, []);

    return (
      <SidebarRoot ref={ref} collapsed={collapsed}>
        <SidebarNav>
          <List collapsed={!collapsed}>
            <NavListItem>
              <ListItemIcon>
                <ProfileOutlineMd />
              </ListItemIcon>
              <ListItemText>Главная</ListItemText>
            </NavListItem>
            <ListItem>
              <ListItemIcon>
                <CompanyOutlineMd />
              </ListItemIcon>
              <ListItemText>Документы</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SettingsFillMd />
              </ListItemIcon>
              <ListItemText>Контрагенты</ListItemText>
            </ListItem>
          </List>
        </SidebarNav>
        <SidebarTogglerWrapper>
          <SidebarToggler
            startIcon={collapsed ? <MenuOnOutlineMd /> : <MenuOffOutlineMd />}
            variant="text"
            onClick={handleSidebarTogglerClick}
          >
            <Collapse orientation="horizontal" in={!collapsed}>
              <SidebarTogglerContent collapsed={collapsed}>
                Свернуть меню
              </SidebarTogglerContent>
            </Collapse>
          </SidebarToggler>
        </SidebarTogglerWrapper>
      </SidebarRoot>
    );
  }
);

export default Sidebar;
