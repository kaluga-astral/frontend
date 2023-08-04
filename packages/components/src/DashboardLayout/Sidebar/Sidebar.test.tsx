import { renderWithTheme, screen } from '@astral/tests';
import { expect } from 'vitest';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('Sidebar открытый при первом рендере', async () => {
    renderWithTheme(<Sidebar menu={{ items: [] }} />);
    expect(screen.getByText('Свернуть меню')).toBeVisible();
  });

  it('Sidebar закрытый при false у флага в localstorage', async () => {
    localStorage.setItem('test', 'false');
    renderWithTheme(<Sidebar localStorageKey="test" menu={{ items: [] }} />);
    expect(screen.getByText('Свернуть меню')).not.toBeVisible();
  });

  it('Sidebar открытый при true у флага в localstorage', async () => {
    localStorage.setItem('test', 'true');
    renderWithTheme(<Sidebar localStorageKey="test" menu={{ items: [] }} />);
    expect(screen.getByText('Свернуть меню')).toBeVisible();
  });
});
