import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { TreeLikeList } from './TreeLikeList';

describe('TreeLikeList', () => {
  it('Label опции отображается', () => {
    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    renderWithTheme(<TreeLikeList data={fakeData} />);

    const label = screen.getByText('Item 1');

    expect(label).toBeVisible();
  });

  it('Вложенные элементы не отображаются, если группа не раскрыта', () => {
    const fakeData = [
      {
        id: '1',
        label: 'Group',
        children: [
          {
            id: '11',
            label: 'Item 1',
          },
        ],
      },
    ];

    renderWithTheme(<TreeLikeList data={fakeData} />);

    const label = screen.queryByText('Item 1');

    expect(label).not.toBeVisible();
  });

  it('Кастомный компонент, указанный в componentList, применяется для списка', () => {
    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    const { container } = renderWithTheme(
      <TreeLikeList data={fakeData} componentList="section" />,
    );

    // Делаем поиск через container, так как нет возможности найти тег через getBy*
    // eslint-disable-next-line testing-library/no-container
    const customElement = container.querySelector('section');

    expect(customElement).toBeInTheDocument();
  });

  it('Кастомный компонент, указанный в componentItem, применяется для элемента списка', () => {
    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    const { container } = renderWithTheme(
      <TreeLikeList data={fakeData} componentList="article" />,
    );

    // Делаем поиск через container, так как нет возможности найти тег через getBy*
    // eslint-disable-next-line testing-library/no-container
    const customElement = container.querySelector('article');

    expect(customElement).toBeInTheDocument();
  });

  it('OnChange вызывается при изменении состояния', async () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    renderWithTheme(<TreeLikeList data={fakeData} onChange={onChangeSpy} />);

    const labelOne = screen.getByText('Item 1');

    await userEvents.click(labelOne);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('Выбранная опция передается в onChange', async () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
      {
        id: '2',
        label: 'Item 2',
      },
    ];

    renderWithTheme(<TreeLikeList data={fakeData} onChange={onChangeSpy} />);

    const labelOne = screen.getByText('Item 1');

    await userEvents.click(labelOne);
    expect(onChangeSpy).toBeCalledWith('1');
  });

  describe('Multiple', () => {
    it('Выбранные значения отображаются, если value не пустое', () => {
      const fakeData = [
        {
          id: '1',
          label: 'Item 1',
        },
        {
          id: '2',
          label: 'Item 2',
        },
      ];

      const TestComponent = () => {
        const [value, setValue] = useState(['1']);

        return (
          <TreeLikeList
            multiple
            value={value}
            data={fakeData}
            onChange={setValue}
          />
        );
      };

      renderWithTheme(<TestComponent />);

      const checked = screen.getAllByRole('checkbox', { checked: true });

      expect(checked).toHaveLength(1);
    });

    it('Родительская группа выделяется, если все дочернии элементы выбраны', async () => {
      const fakeData = [
        {
          id: '1',
          label: 'Group',
          children: [
            {
              id: '11',
              label: 'Item 1',
            },
            {
              id: '12',
              label: 'Item 2',
            },
          ],
        },
      ];

      const TestComponent = () => {
        const [value, setValue] = useState();

        return (
          <TreeLikeList
            multiple
            value={value}
            data={fakeData}
            onChange={setValue}
          />
        );
      };

      renderWithTheme(<TestComponent />);

      const collapseButton = screen.getByRole('button');

      await userEvents.click(collapseButton);

      const labelOne = screen.getByText('Item 1');
      const labelTwo = screen.getByText('Item 2');

      await userEvents.click(labelOne);
      await userEvents.click(labelTwo);

      const checked = screen.getAllByRole('checkbox', { checked: true });

      expect(checked).toHaveLength(3);
    });

    it('Все дочернии элементы отключаются, если выключить родительскую группу', async () => {
      const fakeData = [
        {
          id: '1',
          label: 'Group',
          children: [
            {
              id: '11',
              label: 'Item 1',
            },
            {
              id: '12',
              label: 'Item 2',
            },
          ],
        },
      ];

      const TestComponent = () => {
        const [value, setValue] = useState(['1', '11', '12']);

        return (
          <TreeLikeList
            multiple
            value={value}
            data={fakeData}
            onChange={setValue}
          />
        );
      };

      renderWithTheme(<TestComponent />);

      const groupLabel = screen.getByText('Group');
      const collapseButton = screen.getByRole('button');

      await userEvents.click(groupLabel);
      await userEvents.click(collapseButton);

      const checked = screen.queryAllByRole('checkbox', { checked: true });

      expect(checked).toHaveLength(0);
    });
  });
});
