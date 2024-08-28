import { type Meta, type StoryObj } from '@storybook/react';
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

import { Profile, type ProfileMenuItemData } from './Profile';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=17119-17523)
 * ### [Guide]()
 */

const meta: Meta<typeof Profile> = {
  title: 'Components/Data Display/Profile',
  component: Profile,
};

export default meta;

const FAKE_MENU_LIST = [
  {
    icon: <ProfileOutlineMd />,
    title: 'Мой профиль',
    onClick: () => console.log('Мой профиль'),
  },
];

type Story = StoryObj<typeof Profile>;

export const Interaction: Story = {
  args: {
    displayName: 'Иванов Иван',
    annotation: 'ivanov_ivan@mail.ru',
    avatar: {
      alt: 'Иванов Иван',
      children: 'ИИ',
    },
    menuList: FAKE_MENU_LIST,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
    { icon: <CompanyOutlineMd />, title: 'Мои организации' },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];

  return <Profile displayName="Григорьев Виталий" menuList={menuList} />;
};

/**
 * prop ```menu``` кастомный рендер menu. Перекрывает menuList и exitButton
 */

export const CustomMenu = () => {
  return (
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
  );
};

/**
 * prop ```exitButton``` объект, который добавляет кнопку выхода и действие на нее
 */

export const ExitButton = () => {
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
    { icon: <CompanyOutlineMd />, title: 'Мои организации' },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];
  const exitButton = {
    onClick: () => console.log('Выход'),
  };

  return (
    <Profile
      displayName="Григорьев Виталий"
      menuList={menuList}
      exitButton={exitButton}
    />
  );
};

/**
 * prop ```render``` позволяет задать свое отображение для MenuItem
 */

export const RenderCustomItem = () => {
  const renderItem: ProfileMenuItemData['render'] = ({ title, icon }) => (
    <MenuItem>
      <Typography variant="caption" color="primary">
        {title}
      </Typography>
      <IconButton variant="text">{icon}</IconButton>
    </MenuItem>
  );
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
      render: renderItem,
    },
    {
      icon: <CompanyOutlineMd />,
      title: 'Мои организации',
      render: renderItem,
    },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];

  const exitButton = {
    onClick: () => console.log('Выход'),
  };

  return (
    <Profile
      displayName="Григорьев Виталий"
      menuList={menuList}
      exitButton={exitButton}
    />
  );
};

export const WithAvatar = () => {
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
    <Profile
      displayName="Григорьев Виталий"
      avatar={{
        alt: 'Григорьев Виталий',
        children: 'ГВ',
      }}
      menuList={menuList}
    />
  );
};

export const WithAnnotation = () => {
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
    <Profile
      displayName="Григорьев Виталий"
      annotation="vitatiy_grig@mail.ru"
      menuList={menuList}
    />
  );
};

export const TotalOverflow = () => {
  const menuList = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
    {
      icon: <CompanyOutlineMd />,
      title: 'Мои организации с излишним количеством текста',
    },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];

  return (
    <Profile
      displayName="Константинопольский Конституционный Констебль"
      annotation="vitatiy_grig@mail.ru"
      avatar={{
        alt: 'Константинопольский Конституционный Констебль',
        children: 'КК',
      }}
      menuList={menuList}
    />
  );
};
