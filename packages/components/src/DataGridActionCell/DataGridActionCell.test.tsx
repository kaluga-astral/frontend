import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { DataGridActionCell, type DataGridActions } from './DataGridActionCell';

type DataTypeActions = {
  id: string;
  actions?: object;
};

const FAKE_DATA: DataTypeActions = {
  id: '123456789',
};

describe('DataGridActionCell', () => {
  it('Основные действия отображаются', () => {
    const fakeAction: DataGridActions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
        },
      ],
    };

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const button = screen.getByRole('button');

    expect(button).toBeVisible();
  });

  it('Второстепенные действия отображаются', async () => {
    const fakeAction: DataGridActions<DataTypeActions> = {
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

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const element = await screen.findByText('Сохранить');

    expect(element).toBeVisible();
  });

  it('OnClick вызывается при нажатии на основные действия', async () => {
    const onClickSpy = vi.fn();
    const fakeAction: DataGridActions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
          onClick: onClickSpy,
        },
      ],
    };

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);
    expect(onClickSpy).toBeCalled();
  });

  it('Кнопка блокируется, если disabled=true', () => {
    const fakeAction: DataGridActions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
          disabled: true,
        },
      ],
    };

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Tooltip отображается для основных действий', async () => {
    const fakeAction: DataGridActions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
        },
      ],
    };

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const button = screen.getByRole('button');

    await userEvents.hover(button);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Удалить');
  });

  it('Кнопки заблокированы, при isBlockingOperation=true и loading=true', async () => {
    const fakeAction: DataGridActions<DataTypeActions> = {
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

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const buttons = screen.getAllByRole('button');

    buttons.forEach((button) => expect(button).toBeDisabled());
  });

  it('Окно с подтверждением отображается при нажатии на кнопку действия при needConfirm=true', async () => {
    const onClickSpy = vi.fn();

    const fakeAction: DataGridActions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
          needConfirm: true,
          onClick: onClickSpy,
        },
      ],
    };

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const popover = screen.queryByRole('presentation');

    expect(popover).toBeVisible();
  });

  it('OnClick вызывается при нажатии на подтверждение действия при needConfirm=true', async () => {
    const onClickSpy = vi.fn();
    const fakeAction: DataGridActions<DataTypeActions> = {
      main: [
        {
          icon: <svg />,
          name: 'Удалить',
          needConfirm: true,
          onClick: onClickSpy,
        },
      ],
    };

    renderWithTheme(
      <DataGridActionCell actions={fakeAction} row={FAKE_DATA} />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);

    const confirmButton = screen.getByRole('button', { name: 'Подтвердить' });

    await userEvents.click(confirmButton);
    expect(onClickSpy).toBeCalled();
  });
});
