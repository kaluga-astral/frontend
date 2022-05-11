import { FC } from 'react';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  SettingsFillMd,
} from '@astral/icons';
import { ListItemButton } from '@mui/material';

import { List } from '../List';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { DashboardLayout } from '../DashboardLayout';

import { HeaderProps } from './Header';

export type DashboardLayoutStoryProps = {
  header: HeaderProps;
};

export const DashboardLayoutStory: FC<DashboardLayoutStoryProps> = (props) => {
  const { header } = props;

  return (
    <DashboardLayout>
      <DashboardLayout.Header {...header} />
      <DashboardLayout.Sidebar>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ProfileOutlineMd />
            </ListItemIcon>
            <ListItemText>Главная</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CompanyOutlineMd />
            </ListItemIcon>
            <ListItemText>Документы</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsFillMd />
            </ListItemIcon>
            <ListItemText>Контрагенты</ListItemText>
          </ListItemButton>
        </List>
      </DashboardLayout.Sidebar>
      <DashboardLayout.Main>main-content</DashboardLayout.Main>
    </DashboardLayout>
  );
};

export default DashboardLayoutStory;
