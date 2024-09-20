import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';
import { fireEvent, renderWithTheme, screen, userEvents } from '@astral/tests';

import {
  TreeAutocomplete,
  type TreeAutocompleteProps,
} from './TreeAutocomplete';
import { type TreeAutocompleteValue } from './types';

describe('TreeAutocomplete', () => {
  it('Label отображается', async () => {
    renderWithTheme(
      <TreeAutocomplete
        label="TreeAutocompleteField"
        options={[]}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    expect(screen.getByLabelText('TreeAutocompleteField')).toBeVisible();
  });

  it('Value отображается', async () => {
    renderWithTheme(
      <TreeAutocomplete
        value="1"
        options={[{ id: '1', label: 'test' }]}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    const input = screen.queryByRole('textbox');

    expect(input).toHaveAttribute('value', 'test');
  });

  it('Value сбрасывается при клике по кнопке очистки поля', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue | undefined>(
        '1',
      );

      return (
        <TreeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);

    const clearBtn = screen.getByRole('button');

    await userEvents.click(clearBtn);

    const input = screen.queryByRole('textbox');

    expect(input).toHaveAttribute('value', '');
  });

  it('Кнопка очистки поля не отображается, если инпут пуст', async () => {
    renderWithTheme(
      <TreeAutocomplete
        options={[]}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    const clearBtn = screen.queryByRole('button');

    expect(clearBtn).not.toBeInTheDocument();
  });

  it('Выбранное значение отображается в инпуте', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue>();

      return (
        <TreeAutocomplete
          value={value}
          label="test"
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);

    const input = screen.getByRole('textbox');

    await userEvents.click(input);

    const option = screen.getByText('Vasya');

    await userEvents.click(option);

    const confirmButton = screen.getByText('Выбрать');

    await userEvents.click(confirmButton);
    expect(input).toHaveAttribute('value', 'Vasya');
  });

  it('Модальное окно отображается после нажатия по полю ввода', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    renderWithTheme(
      <TreeAutocomplete
        options={options}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    await userEvents.click(screen.getByRole('textbox'));

    const modal = screen.queryByRole('dialog');

    expect(modal).toBeVisible();
  });

  it('Модальное окно закрывается после выбора значения', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue>();

      return (
        <TreeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('textbox'));

    const option = screen.getByText('Vasya');

    await userEvents.click(option);

    const confirmButton = screen.getByText('Выбрать');

    await userEvents.click(confirmButton);

    const modal = screen.queryByRole('dialog');

    expect(modal).not.toBeVisible();
  });

  it('Заголовок модального окна отображается', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    renderWithTheme(
      <TreeAutocomplete
        options={options}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    await userEvents.click(screen.getByRole('textbox'));

    const title = screen.getByText('Выбор элемента');

    expect(title).toBeVisible();
  });

  it('Кнопка подтверждения выбора заблокирована, если ничего не выбрано в списке', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue>();

      return (
        <TreeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('textbox'));

    const confirmButton = screen.getByText('Выбрать');

    expect(confirmButton).toBeDisabled();
  });

  it('Лоадер отображается при isLoading=true', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue>();

      return (
        <TreeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          isLoading
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('textbox'));

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });

  it('Placeholder отображается, если нет результатов поиска', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue>();

      return (
        <TreeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('textbox'));

    const searchInput = screen.getByPlaceholderText('Поиск');

    fireEvent.change(searchInput, { target: { value: 'aaa' } });

    const placeholder = screen.getByText(
      'По введенному запросу ничего не найдено',
    );

    expect(placeholder).toBeVisible();
  });

  it('Placeholder c ошибкой отображается при isLoadingError=true', async () => {
    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue>();

      return (
        <TreeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          isLoadingError
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('textbox'));

    const placeholder = screen.getByText('Не удалось загрузить данные');

    expect(placeholder).toBeVisible();
  });

  it('OnRetry вызывается при нажатии на кнопку "Попробовать снова"', async () => {
    const onRetrySpy = vi.fn();

    const options: TreeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeAutocompleteValue>();

      return (
        <TreeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          isLoadingError
          onChange={setValue}
          onRetry={onRetrySpy}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    await userEvents.click(screen.getByRole('textbox'));

    const retryButton = screen.getByRole('button', {
      name: 'Попробовать снова',
    });

    await userEvents.click(retryButton);
    expect(onRetrySpy).toHaveBeenCalled();
  });
});
