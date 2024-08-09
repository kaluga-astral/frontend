import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('Tooltip отображается при note и disabled=false', async () => {
    renderWithTheme(
      <PageHeader
        title="Черновик"
        actions={{
          main: [
            {
              text: 'Отправка по маршруту',
              note: 'Кнопка',
            },
          ],
        }}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.hover(button);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Кнопка');
  });

  it('Tooltip отображается при disabledReason и disabled=true', async () => {
    renderWithTheme(
      <PageHeader
        title="Черновик"
        actions={{
          main: [
            {
              text: 'Отправка по маршруту',
              disabled: true,
              disabledReason: 'Заблокировано',
            },
          ],
        }}
      />,
    );

    const item = screen.getByLabelText('Заблокировано');

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Заблокировано');
  });
});
