import { type Meta } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { Divider } from '../Divider';

import { Profile } from './Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
} as Meta<typeof Profile>;

export const Showcase = () => {
  return (
    <Stack gap={4}>
      <Box>
        <Profile
          displayName="Григорьев Виталий"
          annotation="vitatiy_grig@mail.ru"
          avatar={{
            alt: 'Григорьев Виталий',
            children: 'ГВ',
          }}
          menu={(props) => (
            <Menu {...props}>
              <MenuItem>
                <ListItemIcon>
                  <ProfileOutlineMd />
                </ListItemIcon>
                <ListItemText>Мой профиль</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>
                <ListItemText>Мои организации</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>
                <ListItemText>Настройки</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>Выйти</ListItemText>
              </MenuItem>
            </Menu>
          )}
        />
      </Box>
      <Box>
        <Profile
          displayName="Григорьев Виталий"
          avatar={{
            alt: 'Григорьев Виталий',
            children: 'ГВ',
          }}
          menu={(props) => (
            <Menu {...props}>
              <MenuItem>
                <ListItemIcon>
                  <ProfileOutlineMd />
                </ListItemIcon>
                <ListItemText>Мой профиль</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>
                <ListItemText>Мои организации</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>
                <ListItemText>Настройки</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>Выйти</ListItemText>
              </MenuItem>
            </Menu>
          )}
        />
      </Box>
      <Box>
        <Profile
          displayName="Григорьев Виталий"
          menu={(props) => (
            <Menu {...props}>
              <MenuItem>
                <ListItemIcon>
                  <ProfileOutlineMd />
                </ListItemIcon>
                <ListItemText>Мой профиль</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>
                <ListItemText>Мои организации</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>
                <ListItemText>Настройки</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>Выйти</ListItemText>
              </MenuItem>
            </Menu>
          )}
        />
      </Box>
    </Stack>
  );
};

export const LongName = () => {
  return (
    <Stack gap={4}>
      <Box>
        <Profile
          displayName="Константинопольский Конституционный Константин"
          annotation="vitatiy_grig@mail.ru"
          avatar={{
            alt: 'Константинопольский Константин',
            children: 'КК',
          }}
          menu={(props) => (
            <Menu {...props}>
              <MenuItem>
                <ListItemIcon>
                  <ProfileOutlineMd />
                </ListItemIcon>
                <ListItemText>Мой профиль</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>
                <ListItemText>Мои организации</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>
                <ListItemText>Настройки</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>Выйти</ListItemText>
              </MenuItem>
            </Menu>
          )}
        />
      </Box>
    </Stack>
  );
};
