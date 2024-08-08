import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import DashboardLayout from '../DashboardLayout';

describe('Header', () => {
  it('Profile отображается', () => {
    const fakeDisplayName = 'Григорьев Виталий';

    renderWithTheme(
      <DashboardLayout>
        <DashboardLayout.Header
          product={{
            name: 'Астрал.ЭДО',
            logo() {
              return <svg />;
            },
          }}
          profile={{
            displayName: fakeDisplayName,
            annotation: 'vitatiy_grig@mail.ru',
            avatar: {
              alt: 'Григорьев Виталий',
              children: 'ГВ',
            },
          }}
        />
      </DashboardLayout>,
    );

    const profile = screen.getByText(fakeDisplayName);

    expect(profile).toBeVisible();
  });

  it('ExitButton не отображается на desktop версии', () => {
    const fakeDisplayName = 'Григорьев Виталий';

    const onClickSpy = vi.fn;

    renderWithTheme(
      <DashboardLayout>
        <DashboardLayout.Header
          product={{
            name: 'Астрал.ЭДО',
            logo() {
              return <svg />;
            },
          }}
          profile={{
            displayName: fakeDisplayName,
            annotation: 'vitatiy_grig@mail.ru',
            avatar: {
              alt: 'Григорьев Виталий',
              children: 'ГВ',
            },
            exitButton: { onClick: onClickSpy },
          }}
        />
      </DashboardLayout>,
    );

    const exitButton = screen.getByTitle('Выход');

    expect(exitButton).not.toBeVisible();
  });

  it('Product отображается', () => {
    renderWithTheme(
      <DashboardLayout>
        <DashboardLayout.Header
          product={{
            name: 'Астрал.ЭДО',
            logo() {
              return <svg />;
            },
          }}
        />
      </DashboardLayout>,
    );

    const product = screen.getByText('Астрал.ЭДО');

    expect(product).toBeVisible();
  });
});
