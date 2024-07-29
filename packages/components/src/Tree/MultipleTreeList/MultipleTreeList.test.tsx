import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { Typography } from '../../Typography';

import {
  MultipleTreeList,
  type MultipleTreeListProps,
} from './MultipleTreeList';

describe('MultipleTreeList', () => {
  it('Label опции отображается', () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    renderWithTheme(
      <MultipleTreeList data={fakeData} onChange={onChangeSpy} />,
    );

    const label = screen.getByText('Item 1');

    expect(label).toBeVisible();
  });

  it('Note опции отображается', () => {
    const onChangeSpy = vi.fn();

    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
        note: 'Item 1 subtitle',
      },
    ];

    renderWithTheme(
      <MultipleTreeList data={fakeData} onChange={onChangeSpy} />,
    );

    const note = screen.getByText('Item 1 subtitle');

    expect(note).toBeVisible();
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

    renderWithTheme(
      <MultipleTreeList data={fakeData} onChange={onChangeSpy} />,
    );

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
      <MultipleTreeList
        data={fakeData}
        isInitialExpanded
        onChange={onChangeSpy}
      />,
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
      <MultipleTreeList
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

    const renderItem: MultipleTreeListProps['renderItem'] = ({ id, label }) => (
      <Typography component="div">
        #{id}. {label}
      </Typography>
    );

    renderWithTheme(
      <MultipleTreeList
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

    renderWithTheme(
      <MultipleTreeList data={fakeData} onChange={onChangeSpy} />,
    );

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
      <MultipleTreeList
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

      return (
        <MultipleTreeList value={value} data={fakeData} onChange={setValue} />
      );
    };

    renderWithTheme(<TestComponent />);

    const checked = screen.getAllByRole('checkbox', { checked: true });

    expect(checked).toHaveLength(2);
  });

  it('Родительская группа выделяется, если все дочерние элементы выбраны', async () => {
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
      const [value, setValue] = useState<string[] | undefined>();

      return (
        <MultipleTreeList value={value} data={fakeData} onChange={setValue} />
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

  it('Все дочерние элементы отключаются, если выключить родительскую группу', async () => {
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
      const [value, setValue] = useState<string[] | undefined>([
        '1',
        '11',
        '12',
      ]);

      return (
        <MultipleTreeList value={value} data={fakeData} onChange={setValue} />
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
