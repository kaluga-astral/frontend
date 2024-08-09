import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('Tooltip отображается при note и disabled=false основных действий', async () => {
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

  it('Tooltip отображается при disabledReason и disabled=true основных действий', async () => {
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

  it('Tooltip отображается при disabledReason и disabled=true вторичных действий', async () => {
    renderWithTheme(
      <PageHeader
        title="Черновик"
        actions={{
          secondary: [
            {
              text: 'Отправка по маршруту',
              disabled: true,
              disabledReason: 'Заблокировано',
            },
          ],
        }}
      />,
    );

    const secondaryActionButton = screen.getByRole('button');

    await userEvents.click(secondaryActionButton);

    const item = await screen.findByLabelText('Заблокировано');

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Заблокировано');
  });

  it('Tooltip отображается при note и disabled=false вторичных действий', async () => {
    renderWithTheme(
      <PageHeader
        title="Черновик"
        actions={{
          secondary: [
            {
              text: 'Отправка по маршруту',
              note: 'Кнопка',
            },
          ],
        }}
      />,
    );

    const secondaryActionButton = screen.getByRole('button');

    await userEvents.click(secondaryActionButton);

    const item = await screen.findByLabelText('Кнопка');

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Кнопка');
  });

  it('Tooltip отображается при disableReason и disabled=true вторичных видимых действий', async () => {
    renderWithTheme(
      <PageHeader
        title="Черновик"
        actions={{
          secondaryVisible: [
            {
              name: 'Отправка по маршруту',
              icon: <svg />,
              disabled: true,
              disableReason: 'Заблокировано',
            },
          ],
        }}
      />,
    );

    const item = await screen.findByLabelText('Заблокировано');

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Заблокировано');
  });

  it('Tooltip отображается для вторичных видимых действий при disabled=false', async () => {
    renderWithTheme(
      <PageHeader
        title="Черновик"
        actions={{
          secondaryVisible: [
            {
              name: 'Отправка по маршруту',
              icon: <svg />,
            },
          ],
        }}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.hover(button);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Отправка по маршруту');
  });
});
