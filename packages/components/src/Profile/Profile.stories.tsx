import { type Meta, type StoryObj } from '@storybook/react';
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
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { styled } from '../styles';

import { Profile, type ProfileProps } from './Profile';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=17119-17523)
 * ### [Guide]()
 */

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Interaction: Story = {
  args: {
    displayName: 'Иванов Иван',
    annotation: 'ivanov_ivan@mail.ru',
    avatar: {
      alt: 'Иванов Иван',
      children: 'ИИ',
    },
    menu: (props) => (
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
            <OverflowTypography noWrap>Мои организации</OverflowTypography>
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
    ),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Example = () => {
  return (
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
                <OverflowTypography noWrap>Мои организации</OverflowTypography>
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
  );
};

/**
 * prop ```menuList``` принимает массив данных для отображения и заменяет prop ```menu```
 */

export const MenuList = () => {
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
    { icon: <CompanyOutlineMd />, title: 'Мои организации' },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];

  return (
    <Box>
      <Profile displayName="Григорьев Виталий" menuList={menuList} />
    </Box>
  );
};

/**
 * prop ```onExitClick``` функция, которая вызывается при выходе
 */

export const OnExitClick = () => {
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
    { icon: <CompanyOutlineMd />, title: 'Мои организации' },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];

  const onExitClick = () => console.log('Выход');

  return (
    <Box>
      <Profile
        displayName="Григорьев Виталий"
        menuList={menuList}
        onExitClick={onExitClick}
      />
    </Box>
  );
};

/**
 * prop ```renderItem``` позволяет задать свое отображение для MenuItem
 */

export const RenderItem = () => {
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
    { icon: <CompanyOutlineMd />, title: 'Мои организации' },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];

  const renderItem: ProfileProps['renderItem'] = ({ title, icon }) => (
    <Wrapper>
      <Typography variant="caption" color="primary">
        {title}
      </Typography>
      <IconButton variant="text">{icon}</IconButton>
    </Wrapper>
  );

  const onExitClick = () => console.log('Выход');

  return (
    <Box>
      <Profile
        displayName="Григорьев Виталий"
        menuList={menuList}
        onExitClick={onExitClick}
        renderItem={renderItem}
      />
    </Box>
  );
};

export const WithAvatar = () => {
  return (
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
                <OverflowTypography noWrap>Мои организации</OverflowTypography>
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
  );
};

export const WithAnnotation = () => {
  return (
    <Box>
      <Profile
        displayName="Григорьев Виталий"
        annotation="vitatiy_grig@mail.ru"
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
                <OverflowTypography noWrap>Мои организации</OverflowTypography>
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
