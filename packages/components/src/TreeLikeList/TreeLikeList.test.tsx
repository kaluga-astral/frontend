import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { Typography } from '../Typography';

import { TreeLikeList, type TreeLikeListProps } from './TreeLikeList';

describe('TreeLikeList', () => {
  it('Label опции отображается', () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    renderWithTheme(<TreeLikeList data={fakeData} onChange={onChangeSpy} />);

    const label = screen.getByText('Item 1');

    expect(label).toBeVisible();
  });

  it('Вложенные элементы не отображаются, если группа не раскрыта', () => {
    const onChangeSpy = vi.fn();

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

    renderWithTheme(<TreeLikeList data={fakeData} onChange={onChangeSpy} />);

    const label = screen.queryByText('Item 1');

    expect(label).not.toBeVisible();
  });

  it('Вложенные элементы отображаются по умолчанию, если isInitialExpanded=true', () => {
    const onChangeSpy = vi.fn();

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

    renderWithTheme(
      <TreeLikeList data={fakeData} isInitialExpanded onChange={onChangeSpy} />,
    );

    const label = screen.queryByText('Item 1');

    expect(label).toBeVisible();
  });

  it('Вложенные элементы не отображаются по умолчанию, если находятся вне диапазона expandedLevel при isInitialExpanded=true', () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Group',
        children: [
          {
            id: '11',
            label: 'Item 1',
            children: [
              {
                id: '111',
                label: 'SubItem 1',
              },
            ],
          },
        ],
      },
    ];

    renderWithTheme(
      <TreeLikeList
        data={fakeData}
        isInitialExpanded
        expandedLevel={1}
        onChange={onChangeSpy}
      />,
    );

    const label = screen.queryByText('SubItem 1');

    expect(label).not.toBeVisible();
  });

  it('RenderItem применяется к содержимому', () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    const renderItem: TreeLikeListProps['renderItem'] = ({ id, label }) => (
      <Typography component="div">
        #{id}. {label}
      </Typography>
    );

    renderWithTheme(
      <TreeLikeList
        data={fakeData}
        renderItem={renderItem}
        onChange={onChangeSpy}
      />,
    );

    const customElement = screen.getByText('#1. Item 1');

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

    renderWithTheme(<TreeLikeList data={fakeData} onChange={onChangeSpy} />);

    const labelOne = screen.getByText('Item 1');

    await userEvents.click(labelOne);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('Элемент не доступен для взаимодействия, если содержится в disabledItems', async () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    renderWithTheme(
      <TreeLikeList
        data={fakeData}
        disabledItems={['1']}
        onChange={onChangeSpy}
      />,
    );

    const checkbox = screen.getByRole('checkbox', { hidden: true });

    expect(checkbox).toBeDisabled();
  });

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
      {
        id: '3',
        label: 'Item 3',
      },
    ];

    const TestComponent = () => {
      const [value, setValue] = useState<string[] | undefined>(['1', '2']);

      return <TreeLikeList value={value} data={fakeData} onChange={setValue} />;
    };

    renderWithTheme(<TestComponent />);

    const checked = screen.getAllByRole('checkbox', { checked: true });

    expect(checked).toHaveLength(2);
  });
});
