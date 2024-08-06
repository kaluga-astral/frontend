import { describe, expect, it, vi } from 'vitest';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  SettingsFillMd,
} from '@astral/icons';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { MenuItem } from '../MenuItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';
import { OverflowTypography } from '../OverflowTypography';
import { Menu } from '../Menu';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';

import Profile, { type ProfileMenuItemData } from './Profile';

describe('Profile', () => {
  const FAKE_MENU_LIST = [
    {
      icon: <ProfileOutlineMd />,
      title: 'Мой профиль',
      onClick: () => console.log('Мой профиль'),
    },
    { icon: <CompanyOutlineMd />, title: 'Мои организации' },
    { icon: <SettingsFillMd />, title: 'Настройки' },
  ];

  it('Profile отображается', () => {
    const displayName = 'Григорьев Виталий';

    renderWithTheme(<Profile displayName={displayName} />);

    const profile = screen.getByText(displayName);

    expect(profile).toBeVisible();
  });

  it('Menu отображается при клике на Profile, если передан menuList', async () => {
    const fakeDisplayName = 'Григорьев Виталий';

    renderWithTheme(
      <Profile displayName={fakeDisplayName} menuList={FAKE_MENU_LIST} />,
    );

    const profile = screen.getByText(fakeDisplayName);

    await userEvents.click(profile);

    const menuItem = await screen.findByText('Мой профиль');

    expect(menuItem).toBeVisible();
  });

  it('Menu отображается при клике на Profile, если передан menu', async () => {
    const fakeDisplayName = 'Григорьев Виталий';

    renderWithTheme(
      <Profile
        displayName={fakeDisplayName}
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
          </Menu>
        )}
      />,
    );

    const profile = screen.getByText(fakeDisplayName);

    await userEvents.click(profile);

    const menuItem = await screen.findByText('Мой профиль');

    expect(menuItem).toBeVisible();
  });

  it('Аннотация отображается', () => {
    const fakeDisplayName = 'Григорьев Виталий';
    const fakeAnnotation = 'vitatiy_grig@mail.ru';

    renderWithTheme(
      <Profile displayName={fakeDisplayName} annotation={fakeAnnotation} />,
    );

    const annotation = screen.getByText(fakeAnnotation);

    expect(annotation).toBeVisible();
  });

  it('Render применяется к элементам меню', async () => {
    const fakeDisplayName = 'Григорьев Виталий';
    const renderItem: ProfileMenuItemData['render'] = ({ title, icon }) => (
      <MenuItem>
        <Typography variant="caption" color="primary">
          #{title}
        </Typography>
        <IconButton variant="text">{icon}</IconButton>
      </MenuItem>
    );

    const fakeMenuList = [
      {
        icon: <ProfileOutlineMd />,
        title: 'Мой профиль',
        onClick: () => console.log('Мой профиль'),
        render: renderItem,
      },
    ];

    renderWithTheme(
      <Profile displayName={fakeDisplayName} menuList={fakeMenuList} />,
    );

    const profile = screen.getByText(fakeDisplayName);

    await userEvents.click(profile);

    const customElement = await screen.findByText('#Мой профиль');

    expect(customElement).toBeVisible();
  });

  it('Кнопка exit отображается если передан exitButton', async () => {
    const fakeDisplayName = 'Григорьев Виталий';

    const onClickSpy = vi.fn;

    renderWithTheme(
      <Profile
        displayName={fakeDisplayName}
        exitButton={{ onClick: onClickSpy }}
      />,
    );

    const profile = screen.getByText(fakeDisplayName);

    await userEvents.click(profile);

    const exitButton = await screen.findByText('Выйти');

    expect(exitButton).toBeVisible();
  });
});
