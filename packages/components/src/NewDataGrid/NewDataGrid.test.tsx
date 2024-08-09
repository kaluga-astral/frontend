import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { useState } from 'react';
import { BinOutlineMd } from '@astral/icons';

import { ActionCell } from '../ActionCell';

import { NewDataGrid } from './NewDataGrid';
import type { DataGridColumns, DataGridSort } from './types';
import { type DataGridRowWithOptions } from './types';

describe('NewDataGrid', () => {
  it('Названия колонок отображаются', () => {
    renderWithTheme(
      <NewDataGrid
        keyId="id"
        rows={[]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={() => {}}
      />,
    );

    const title = screen.getByText('Наименование');

    expect(title).toBeVisible();
  });

  it('Данные в строке отображаются', async () => {
    renderWithTheme(
      <NewDataGrid
        keyId="name"
        rows={[{ name: 'Vasya' }]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={() => {}}
      />,
    );

    const title = screen.getByText('Vasya');

    expect(title).toBeVisible();
  });

  it.each([
    [undefined, '—'],
    [null, '—'],
    ['', '—'],
    [NaN, '—'],
    [0, 0],
    ['Vasya', 'Vasya'],
  ])(
    'EmptyCellValue отображается если нет данных',
    async (cell, expectedCell) => {
      renderWithTheme(
        <NewDataGrid
          keyId="cell"
          rows={[{ cell: cell }]}
          columns={[
            {
              field: 'cell',
              label: 'Наименование',
            },
          ]}
          onRetry={() => {}}
        />,
      );

      const emptyCell = screen.getByText(expectedCell);

      expect(emptyCell).toBeVisible();
    },
  );

  it('EmptyCellValue отображается если format возвращает не валидные данные', async () => {
    type DataTypeEmptyCell = {
      id: string;
      recipient?: string;
    };

    const fakeColumns: DataGridColumns<DataTypeEmptyCell>[] = [
      {
        field: 'recipient',
        label: 'Получатель',
        sortable: true,
        format: ({ recipient }) => recipient,
      },
    ];

    const fakeData: DataGridRowWithOptions<DataTypeEmptyCell>[] = [
      {
        id: '1',
      },
      {
        id: '2',
        recipient: 'ИП Иванов О.В.',
      },
    ];

    renderWithTheme(
      <NewDataGrid
        keyId="id"
        rows={fakeData}
        columns={fakeColumns}
        onRetry={() => {}}
      />,
    );

    const emptyCell = screen.getByText('—');

    expect(emptyCell).toBeVisible();
  });

  describe('Иконка сортировки', () => {
    it('Отображается при двух или более записях и sortable=true', () => {
      renderWithTheme(
        <NewDataGrid
          keyId="name"
          rows={[{ name: 'Vasya' }, { name: 'Petya' }]}
          columns={[
            {
              field: 'name',
              label: 'Наименование',
              sortable: true,
            },
          ]}
          onRetry={() => {}}
        />,
      );

      const icon = screen.getByText('Наименование').querySelector('svg');

      expect(icon).not.toBeNull();
    });

    it('Не отображается при отсутствии данных и sortable=true', () => {
      renderWithTheme(
        <NewDataGrid
          keyId="name"
          rows={[]}
          columns={[
            {
              field: 'name',
              label: 'Наименование',
              sortable: true,
            },
          ]}
          onRetry={() => {}}
        />,
      );

      const icon = screen.getByText('Наименование').querySelector('svg');

      expect(icon).toBeNull();
    });

    it('Не отображается при одной записи и sortable=true', () => {
      renderWithTheme(
        <NewDataGrid
          keyId="name"
          rows={[{ name: 'Vasya' }]}
          columns={[
            {
              field: 'name',
              label: 'Наименование',
            },
          ]}
          onRetry={() => {}}
        />,
      );

      const icon = screen.getByText('Наименование').querySelector('svg');

      expect(icon).toBeNull();
    });
  });

  it('OnSort вызывается по клику на head cell', async () => {
    type DataItem = {
      name: string;
    };

    const columns: DataGridColumns<DataItem>[] = [
      {
        field: 'name',
        label: 'Наименование',
        sortable: true,
      },
    ];

    let currentSort: DataGridSort<keyof DataItem> | undefined;

    const TestComponent = () => {
      const [sorting, setSorting] = useState<DataGridSort<keyof DataItem>>();

      const handleSort = (sort?: DataGridSort<keyof DataItem>) => {
        currentSort = sort;
        setSorting(sort);
      };

      return (
        <NewDataGrid<DataItem>
          keyId="name"
          rows={[{ name: 'Vasya' }, { name: 'Petya' }]}
          sorting={sorting}
          columns={columns}
          onSort={handleSort}
          onRetry={() => {}}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    expect(currentSort).toBeUndefined();
    await userEvents.click(screen.getByText('Наименование'));
    expect(currentSort).toEqual({ fieldId: 'name', sort: 'asc' });
    await userEvents.click(screen.getByText('Наименование'));
    expect(currentSort).toEqual({ fieldId: 'name', sort: 'desc' });
    await userEvents.click(screen.getByText('Наименование'));
    expect(currentSort).toBeUndefined();
  });

  it('Placeholder отображается при отсутствии данных', async () => {
    renderWithTheme(
      <NewDataGrid
        keyId="id"
        rows={[]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={() => {}}
      />,
    );

    const title = screen.getByText('Нет данных');

    expect(title).toBeVisible();
  });

  it('Placeholder c ошибкой отображается при isError=true', async () => {
    renderWithTheme(
      <NewDataGrid
        keyId="id"
        isError
        rows={[]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={() => {}}
      />,
    );

    const title = screen.getByText('Произошла ошибка');

    expect(title).toBeVisible();
  });

  it('Лоадер отображается при isLoading=true при первом отображении', async () => {
    renderWithTheme(
      <NewDataGrid
        keyId="id"
        isLoading
        rows={[]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={() => {}}
      />,
    );

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });

  it('OnRowClick получает данные row по клику на строку', async () => {
    const onClickSpy = vi.fn();

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        rows={[{ name: 'Vasya' }]}
        onRowClick={onClickSpy}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={() => {}}
      />,
    );

    await userEvents.click(screen.getByText('Vasya'));
    expect(onClickSpy.mock.calls[0][0]).toEqual({ name: 'Vasya' });
  });

  it('Чекбокс отображается в шапке и строке, если для таблицы указан onSelectRow', async () => {
    const onSelectRowSpy = vi.fn();

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        rows={[{ name: 'Vasya' }]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onSelectRow={onSelectRowSpy}
        onRetry={() => {}}
      />,
    );

    const checkboxes = screen.queryAllByRole('checkbox');

    expect(checkboxes).toHaveLength(2);
  });

  it('Чекбокс не отображается для строки при наличии опции isNotSelectable, если для таблицы указан onSelectRow', async () => {
    const onSelectRowSpy = vi.fn();

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        rows={[{ name: 'Vasya', options: { isNotSelectable: true } }]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onSelectRow={onSelectRowSpy}
        onRetry={() => {}}
      />,
    );

    const checkboxes = screen.queryAllByRole('checkbox');

    expect(checkboxes).toHaveLength(1);
  });

  it('OnRetry вызывается при нажатии на кнопку "Попробовать снова"', async () => {
    const onRetrySpy = vi.fn();

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        isError
        rows={[]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={onRetrySpy}
      />,
    );

    await userEvents.click(screen.getByText('Попробовать снова'));
    expect(onRetrySpy).toHaveBeenCalled();
  });

  it('Строка не доступна для взаимодействия, если isDisabled=true', async () => {
    const onClickSpy = vi.fn();

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        rows={[{ name: 'Vasya', options: { isDisabled: true } }]}
        onRowClick={onClickSpy}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        onRetry={() => {}}
      />,
    );

    await userEvents.click(screen.getByText('Vasya'));
    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('Последняя ячейка доступна для взаимодействия, если isDisabled=true и isDisabledLastCell=false', async () => {
    const onDeleteSpy = vi.fn();

    const ACTIONS = {
      main: [
        {
          icon: <BinOutlineMd />,
          name: 'Удалить',
          onClick: onDeleteSpy,
        },
      ],
    };

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        rows={[
          {
            name: 'Vasya',
            options: { isDisabled: true, isDisabledLastCell: false },
          },
        ]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
          {
            label: 'Действия',
            sortable: false,
            align: 'center',
            width: '100px',
            renderCell: (row) => {
              return <ActionCell actions={ACTIONS} row={row} />;
            },
          },
        ]}
        onRetry={() => {}}
      />,
    );

    const button = screen.getByRole('button');

    await userEvents.click(button);
    expect(onDeleteSpy).toHaveBeenCalled();
  });

  it('Вложенные элементы не отображаются, если группа не раскрыта', () => {
    const fakeData = [
      {
        id: 1,
        name: 'Group',
        children: [
          {
            name: 'Item 1',
          },
        ],
      },
    ];

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        rows={fakeData}
        onRetry={() => {}}
      />,
    );

    const label = screen.queryByText('Item 1');

    expect(label).not.toBeInTheDocument();
  });

  it('Вложенные элементы отображаются по умолчанию, если isInitialExpanded=true', () => {
    const fakeData = [
      {
        id: 1,
        name: 'Group',
        children: [
          {
            name: 'Item 1',
          },
        ],
      },
    ];

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        tree={{
          isInitialExpanded: true,
        }}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        rows={fakeData}
        onRetry={() => {}}
      />,
    );

    const label = screen.queryByText('Item 1');

    expect(label).toBeVisible();
  });

  it('Вложенные элементы не отображаются по умолчанию, если находятся вне диапазона expandedLevel при isInitialExpanded=true', () => {
    const fakeData = [
      {
        id: '1',
        name: 'Group',
        children: [
          {
            id: '11',
            name: 'Item 1',
            children: [
              {
                id: '111',
                name: 'SubItem 1',
              },
            ],
          },
        ],
      },
    ];

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        tree={{
          isInitialExpanded: true,
        }}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        rows={fakeData}
        onRetry={() => {}}
      />,
    );

    const label = screen.queryByText('SubItem 1');

    expect(label).not.toBeInTheDocument();
  });

  it('Кнопка "Показать все" отображается, если количество дочерних элементов больше значения, указанного в initialVisibleChildrenCount', () => {
    const fakeData = [
      {
        id: '1',
        name: 'Group',
        children: [
          {
            id: '11',
            name: 'Item 1',
          },
          {
            id: '12',
            name: 'Item 2',
          },
        ],
      },
    ];

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        tree={{
          isInitialExpanded: true,
          initialVisibleChildrenCount: 1,
        }}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        rows={fakeData}
        onRetry={() => {}}
      />,
    );

    const label = screen.queryByText('Показать все');

    expect(label).toBeVisible();
  });

  it('Кнопка "Показать все" не отображается, если количество дочерних элементов меньше значения, указанного в initialVisibleChildrenCount', () => {
    const fakeData = [
      {
        id: '1',
        name: 'Group',
        children: [
          {
            id: '11',
            name: 'Item 1',
          },
          {
            id: '12',
            name: 'Item 2',
          },
        ],
      },
    ];

    renderWithTheme(
      <NewDataGrid
        keyId="name"
        tree={{
          isInitialExpanded: true,
          initialVisibleChildrenCount: 2,
        }}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
        rows={fakeData}
        onRetry={() => {}}
      />,
    );

    const label = screen.queryByText('Показать все');

    expect(label).not.toBeInTheDocument();
  });
});
