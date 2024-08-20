import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { ActionCell, type Actions } from './ActionCell';

type DataTypeActions = {
  id: string;
  actions?: object;
};

const FAKE_DATA: DataTypeActions = {
  id: '123456789',
};

describe('ActionCell', () => {
  it('Основные действия отображаются', () => {
    const fakeAction: Actions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
        },
      ],
    };

    renderWithTheme(<ActionCell actions={fakeAction} row={FAKE_DATA} />);

    const button = screen.getByRole('button');

    expect(button).toBeVisible();
  });

  it('Второстепенные действия отображаются', async () => {
    const fakeAction: Actions<DataTypeActions> = {
      main: [],
      secondary: [
        {
          name: 'Удалить',
        },
        {
          name: 'Сохранить',
        },
      ],
    };

    renderWithTheme(<ActionCell actions={fakeAction} row={FAKE_DATA} />);

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const element = await screen.findByText('Сохранить');

    expect(element).toBeVisible();
  });

  it('OnClick вызывается при нажатии на основные действия', async () => {
    const onClickSpy = vi.fn();
    const fakeAction: Actions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
          onClick: onClickSpy,
        },
      ],
    };

    renderWithTheme(<ActionCell actions={fakeAction} row={FAKE_DATA} />);

    const button = screen.getByRole('button');

    await userEvents.click(button);
    expect(onClickSpy).toBeCalled();
  });

  it('Кнопка блокируется, если disabled=true', () => {
    const fakeAction: Actions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
          disabled: true,
        },
      ],
    };

    renderWithTheme(<ActionCell actions={fakeAction} row={FAKE_DATA} />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Tooltip отображается для основных действий', async () => {
    const fakeAction: Actions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
        },
      ],
    };

    renderWithTheme(<ActionCell actions={fakeAction} row={FAKE_DATA} />);

    const button = screen.getByRole('button');

    await userEvents.hover(button);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Удалить');
  });

  it('Кнопки заблокированы, при isBlockingOperation=true и loading=true', async () => {
    const fakeAction: Actions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
          loading: true,
          isBlockingOperation: true,
        },
      ],
      secondary: [
        {
          icon: <svg />,
          name: 'Отправить',
        },
      ],
    };

    renderWithTheme(<ActionCell actions={fakeAction} row={FAKE_DATA} />);

    const buttons = screen.getAllByRole('button');

    buttons.forEach((button) => expect(button).toBeDisabled());
  });
});
