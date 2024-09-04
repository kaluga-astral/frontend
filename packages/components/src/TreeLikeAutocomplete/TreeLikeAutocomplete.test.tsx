import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';
import { fireEvent, renderWithTheme, screen, userEvents } from '@astral/tests';

import {
  TreeLikeAutocomplete,
  type TreeLikeAutocompleteProps,
} from './TreeLikeAutocomplete';
import { type TreeLikeAutocompleteValue } from './types';

describe('TreeLikeAutocomplete', () => {
  it('Label отображается', async () => {
    renderWithTheme(
      <TreeLikeAutocomplete
        label="TreeLikeAutocompleteField"
        options={[]}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    expect(screen.getByLabelText('TreeLikeAutocompleteField')).toBeVisible();
  });

  it('Тэг отображается', async () => {
    renderWithTheme(
      <TreeLikeAutocomplete
        value={['1']}
        options={[{ id: '1', label: 'test' }]}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    const tag = screen.queryByRole('button', { name: 'test' });

    expect(tag).toBeVisible();
  });

  it('Value сбрасывается при клике по кнопке очистки поля', async () => {
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(
        ['1'],
      );

      return (
        <TreeLikeAutocomplete
          value={value}
          options={options}
          dialogProps={{ title: 'Выбор элемента' }}
          onChange={setValue}
        />
      );
    };

    renderWithTheme(<TestComponent />);

    const clearBtn = screen.getByRole('button', { name: 'Очистить' });

    await userEvents.click(clearBtn);

    const tag = screen.queryByRole('button', { name: 'test' });

    expect(tag).not.toBeInTheDocument();
  });

  it('Кнопка очистки поля не отображается, если инпут пуст', async () => {
    renderWithTheme(
      <TreeLikeAutocomplete
        options={[]}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    const clearBtn = screen.queryByRole('button', { name: 'Очистить' });

    expect(clearBtn).not.toBeInTheDocument();
  });

  it('Модальное окно отображается после нажатия по полю ввода', async () => {
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    renderWithTheme(
      <TreeLikeAutocomplete
        options={options}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    await userEvents.click(screen.getByRole('textbox'));

    const modal = screen.queryByRole('dialog');

    expect(modal).toBeVisible();
  });

  it('Модальное окно закрывается после выбора значения', async () => {
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeLikeAutocompleteValue>();

      return (
        <TreeLikeAutocomplete
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
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    renderWithTheme(
      <TreeLikeAutocomplete
        options={options}
        dialogProps={{ title: 'Выбор элемента' }}
      />,
    );

    await userEvents.click(screen.getByRole('textbox'));

    const title = screen.getByText('Выбор элемента');

    expect(title).toBeVisible();
  });

  it('Кнопка подтверждения выбора заблокирована, если ничего не выбрано в списке', async () => {
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeLikeAutocompleteValue>();

      return (
        <TreeLikeAutocomplete
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
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeLikeAutocompleteValue>();

      return (
        <TreeLikeAutocomplete
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
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeLikeAutocompleteValue>();

      return (
        <TreeLikeAutocomplete
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
    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeLikeAutocompleteValue>();

      return (
        <TreeLikeAutocomplete
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

    const options: TreeLikeAutocompleteProps['options'] = [
      { id: '1', label: 'Vasya' },
      { id: '2', label: 'Kolya' },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<TreeLikeAutocompleteValue>();

      return (
        <TreeLikeAutocomplete
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
