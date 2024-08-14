import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('Note для основных действий отображается в tooltip', async () => {
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

  it('DisabledReason для основных действий отображается в tooltip при disabled=true', async () => {
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

  it('DisabledReason для вторичных действий отображается в tooltip при disabled=true', async () => {
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

  it('Note для вторичных действий отображается в tooltip', async () => {
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

  it('DisabledReason для вторичных видимых действий отображается в tooltip при disabled=true', async () => {
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

  it('Tooltip отображается для вторичных видимых действий', async () => {
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

  it('OnClick вызывается при нажатии на вторичные видимые действия', async () => {
    const onClickSpy = vi.fn();

    renderWithTheme(
      <PageHeader
        title="Черновик"
        actions={{
          secondaryVisible: [
            {
              name: 'Отправка по маршруту',
              icon: <svg />,
              onClick: onClickSpy,
            },
          ],
        }}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);
    expect(onClickSpy).toBeCalled();
  });
});
