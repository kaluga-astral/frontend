import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, waitFor } from '@astral/tests';

import { DashboardSidebarProvider } from '../../DashboardSidebarProvider';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('Sidebar открытый при первом рендере', async () => {
    renderWithTheme(
      <DashboardSidebarProvider>
        <Sidebar menu={{ items: [] }} />
      </DashboardSidebarProvider>,
    );

    expect(screen.getByText('Свернуть меню')).toBeVisible();
  });

  it('Sidebar открытый при первом рендере и закрывается при false у флага в localStorage', async () => {
    localStorage.setItem('test', 'false');

    renderWithTheme(
      <DashboardSidebarProvider localStorageKey="test">
        <Sidebar menu={{ items: [] }} />
      </DashboardSidebarProvider>,
    );

    expect(screen.getByText('Свернуть меню')).toBeVisible();

    await waitFor(() =>
      expect(screen.getByText('Свернуть меню')).not.toBeVisible(),
    );
  });

  it('Sidebar открытый при первом рендере и остается открытым при true у флага в localStorage', async () => {
    localStorage.setItem('test', 'true');

    renderWithTheme(
      <DashboardSidebarProvider localStorageKey="test">
        <Sidebar menu={{ items: [] }} />
      </DashboardSidebarProvider>,
    );

    expect(screen.getByText('Свернуть меню')).toBeVisible();

    await waitFor(() =>
      expect(screen.getByText('Свернуть меню')).toBeVisible(),
    );
  });
});
