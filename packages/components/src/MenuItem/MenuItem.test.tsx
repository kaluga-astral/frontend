import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { MenuItem } from './MenuItem';

describe('MenuItem', () => {
  it('Tooltip отображается если передан note и disabled=false', async () => {
    const label = 'Мой профиль';

    renderWithTheme(<MenuItem note="Перейти в профиль">{label}</MenuItem>);

    const item = screen.getByText(label);

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Перейти в профиль');
  });

  it('Tooltip отображается если передан disabledReason и disabled=true', async () => {
    const label = 'Мой профиль';

    renderWithTheme(
      <MenuItem disabled disabledReason="Заблокировано">
        {label}
      </MenuItem>,
    );

    const item = screen.getByLabelText('Заблокировано');

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Заблокировано');
  });
});
