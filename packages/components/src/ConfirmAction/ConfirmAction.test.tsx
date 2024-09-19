import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { BinOutlineMd } from '@astral/icons';

import { IconButton } from '../IconButton';

import { ConfirmAction } from './ConfirmAction';

describe('ConfirmAction', () => {
  it('Окно с подтверждением отображается при нажатии на кнопку действия', async () => {
    renderWithTheme(
      <ConfirmAction
        actionComponent={(props) => (
          <IconButton {...props}>
            <BinOutlineMd />
          </IconButton>
        )}
        onConfirm={() => {}}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const popover = screen.queryByRole('presentation');

    expect(popover).toBeVisible();
  });

  it('Поясняющий текст отображается', async () => {
    renderWithTheme(
      <ConfirmAction
        text="Text"
        actionComponent={(props) => (
          <IconButton {...props}>
            <BinOutlineMd />
          </IconButton>
        )}
        onConfirm={() => {}}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const text = screen.queryByText('Text');

    expect(text).toBeVisible();
  });

  it('Кастомный текст кнопки подтверждения отображается', async () => {
    renderWithTheme(
      <ConfirmAction
        confirmButtonProps={{
          text: 'Да, удалить',
        }}
        actionComponent={(props) => (
          <IconButton {...props}>
            <BinOutlineMd />
          </IconButton>
        )}
        onConfirm={() => {}}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const text = screen.queryByRole('button', { name: 'Да, удалить' });

    expect(text).toBeVisible();
  });

  it('Окно с подтверждением закрывается при нажатии на кнопку отмены', async () => {
    renderWithTheme(
      <ConfirmAction
        actionComponent={(props) => (
          <IconButton {...props}>
            <BinOutlineMd />
          </IconButton>
        )}
        onConfirm={() => {}}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const cancelButton = screen.getByRole('button', { name: 'Отмена' });

    await userEvents.click(cancelButton);

    const popover = screen.queryByRole('presentation');

    expect(popover).not.toBeInTheDocument();
  });

  it('Окно с подтверждением закрывается при нажатии на кнопку подтверждения', async () => {
    renderWithTheme(
      <ConfirmAction
        actionComponent={(props) => (
          <IconButton {...props}>
            <BinOutlineMd />
          </IconButton>
        )}
        onConfirm={() => {}}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const confirmButton = screen.getByRole('button', { name: 'Подтвердить' });

    await userEvents.click(confirmButton);

    const popover = screen.queryByRole('presentation');

    expect(popover).not.toBeInTheDocument();
  });

  it('OnConfirm вызывается при нажатии на кнопку подтверждения', async () => {
    const onConfirmSpy = vi.fn();

    renderWithTheme(
      <ConfirmAction
        actionComponent={(props) => (
          <IconButton {...props}>
            <BinOutlineMd />
          </IconButton>
        )}
        onConfirm={onConfirmSpy}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const confirmButton = screen.getByRole('button', { name: 'Подтвердить' });

    await userEvents.click(confirmButton);
    expect(onConfirmSpy).toBeCalled();
  });
});
