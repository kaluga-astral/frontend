import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { TreeList } from './TreeList';

describe('TreeList', () => {
  it('Label опции отображается', () => {
    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    renderWithTheme(<TreeList data={fakeData} />);

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

    renderWithTheme(<TreeList data={fakeData} />);

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
      <TreeList data={fakeData} componentList="section" />,
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
      <TreeList data={fakeData} componentList="article" />,
    );

    // Делаем поиск через container, так как нет возможности найти тег через getBy*
    // eslint-disable-next-line testing-library/no-container
    const customElement = container.querySelector('article');

    expect(customElement).toBeInTheDocument();
  });

  it('OnChange вызывается при выборе item', async () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    renderWithTheme(<TreeList data={fakeData} onChange={onChangeSpy} />);

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

    renderWithTheme(<TreeList data={fakeData} onChange={onChangeSpy} />);

    const labelOne = screen.getByText('Item 1');

    await userEvents.click(labelOne);
    expect(onChangeSpy).toBeCalledWith('1');
  });
});
