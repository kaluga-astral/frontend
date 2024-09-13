import { describe, expect } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { HintIcon } from './HintIcon';

describe('HintIcon', () => {
  it('Иконка отображается', () => {
    renderWithTheme(<HintIcon variant="info" title="" note="info" />);

    const icon = screen.getByLabelText('info').querySelector('svg');

    expect(icon).toBeVisible();
  });

  it('Тултип отображается при наведении', async () => {
    renderWithTheme(<HintIcon variant="info" title="" note="info" />);

    const icon = screen.getByLabelText('info').querySelector('svg');

    if (icon) {
      await userEvents.hover(icon);
    }

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('info');
  });
});
