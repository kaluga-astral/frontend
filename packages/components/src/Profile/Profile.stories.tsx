import { type Meta } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';

import { ListItemIcon } from '../ListItemIcon';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { Divider } from '../Divider';
import { ListItemText } from '../ListItemText';
import { OverflowTypography } from '../OverflowTypography';

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
                <ListItemText>
                  <OverflowTypography noWrap>Мой профиль</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>
                    Мои организации
                  </OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Настройки</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Выйти</OverflowTypography>
                </ListItemText>
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
                <ListItemText>
                  <OverflowTypography noWrap>Мой профиль</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>
                    Мои организации
                  </OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Настройки</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Выйти</OverflowTypography>
                </ListItemText>
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
                <ListItemText>
                  <OverflowTypography noWrap>Мой профиль</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>

                <ListItemText>
                  <OverflowTypography noWrap>
                    Мои организации
                  </OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Настройки</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Выйти</OverflowTypography>
                </ListItemText>
              </MenuItem>
            </Menu>
          )}
        />
      </Box>
    </Stack>
  );
};

export const TotalOverflow = () => {
  return (
    <Stack gap={4}>
      <Box>
        <Profile
          displayName="Константинопольский Конституционный Констебль"
          annotation="vitatiy_grig@mail.ru"
          avatar={{
            alt: 'Константинопольский Конституционный Констебль',
            children: 'КК',
          }}
          menu={(props) => (
            <Menu {...props}>
              <MenuItem>
                <ListItemIcon>
                  <ProfileOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Мой профиль</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CompanyOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>
                    Мои организации с излишним количеством текста
                  </OverflowTypography>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsFillMd />
                </ListItemIcon>

                <ListItemText>
                  <OverflowTypography noWrap>Настройки</OverflowTypography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <QuitOutlineMd />
                </ListItemIcon>
                <ListItemText>
                  <OverflowTypography noWrap>Выйти</OverflowTypography>
                </ListItemText>
              </MenuItem>
            </Menu>
          )}
        />
      </Box>
    </Stack>
  );
};
