import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { Typography } from '../../Typography';

import { TreeList, type TreeListProps } from './TreeList';

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

  it('Вложенные элементы отображаются по умолчанию, если isInitialExpanded=true', () => {
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

    renderWithTheme(<TreeList data={fakeData} isInitialExpanded />);

    const label = screen.queryByText('Item 1');

    expect(label).toBeVisible();
  });

  it('Вложенные элементы не отображаются по умолчанию, если находятся вне диапазона expandedLevel при isInitialExpanded=true', () => {
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
      <TreeList data={fakeData} isInitialExpanded expandedLevel={1} />,
    );

    const label = screen.queryByText('SubItem 1');

    expect(label).not.toBeVisible();
  });

  it('RenderItem применяется к содержимому', () => {
    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
      },
    ];

    const renderItem: TreeListProps['renderItem'] = ({ id, label }) => (
      <Typography component="div">
        #{id}. {label}
      </Typography>
    );

    renderWithTheme(<TreeList data={fakeData} renderItem={renderItem} />);

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

  it('DisabledItem принимает различные типы данных', () => {
    const fakeData = [
      {
        id: '1',
        label: 'Item 1',
        children: [
          {
            id: '11',
            label: 'Item 1.1',
          },
        ],
      },
      {
        id: '2',
        label: 'Item 2',
      },
    ];

    renderWithTheme(
      <TreeList
        data={fakeData}
        disabledItems={[{ id: 1, disableReason: 'Заблокировано' }, '2']}
        isInitialExpanded
      />,
    );

    const label = screen.getByText('Item 1.1');

    screen.debug();
    expect(label).not.toBeVisible();
  });
});
