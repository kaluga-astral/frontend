import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { useState } from 'react';
import { vi } from 'vitest';

import { DataGrid } from './DataGrid';
import type { DataGridColumns, DataGridSort } from './types';

describe('DataGrid', () => {
  it('Props:columns: отображаются названия колонок', () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
      },
    ];

    renderWithTheme(<DataGrid keyId="id" rows={[]} columns={columns} />);

    const title = screen.getByText('Наименование');

    expect(title).toBeVisible();
  });

  it('Props:columns:sortable: отображается иконка сортировки', () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
        sortable: true,
      },
    ];

    renderWithTheme(<DataGrid keyId="id" rows={[]} columns={columns} />);

    const icon = screen.getByText('Наименование').querySelector('svg');

    expect(icon).not.toBeNull();
  });

  it('Props:columns:sortable: по клику на head cell вызывается onSort', async () => {
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
        <DataGrid<DataItem>
          keyId="name"
          rows={[]}
          sorting={sorting}
          onSort={handleSort}
          columns={columns}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    expect(currentSort).toBe(undefined);
    await userEvents.click(screen.getByText('Наименование'));
    expect(currentSort).toEqual({ fieldId: 'name', sort: 'asc' });
    await userEvents.click(screen.getByText('Наименование'));
    expect(currentSort).toEqual({ fieldId: 'name', sort: 'desc' });
    await userEvents.click(screen.getByText('Наименование'));
    expect(currentSort).toBe(undefined);
  });

  it('Props:columns:field: отображает в строке данные по field', async () => {
    renderWithTheme(
      <DataGrid
        keyId="name"
        rows={[{ name: 'Vasya' }]}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
      />,
    );

    const title = screen.getByText('Vasya');

    expect(title).toBeVisible();
  });

  it('Props:options=[]: отображается placeholder', async () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
      },
    ];

    renderWithTheme(<DataGrid keyId="id" rows={[]} columns={columns} />);

    const title = screen.getByText('Нет данных');

    expect(title).toBeVisible();
  });

  it('Props:onRowClick: по клику на строку получаем данные row', async () => {
    const onRowClick = vi.fn();

    renderWithTheme(
      <DataGrid
        keyId="name"
        rows={[{ name: 'Vasya' }]}
        onRowClick={onRowClick}
        columns={[
          {
            field: 'name',
            label: 'Наименование',
          },
        ]}
      />,
    );

    await userEvents.click(screen.getByText('Vasya'));
    expect(onRowClick.mock.calls[0][0]).toEqual({ name: 'Vasya' });
  });

  // TODO: https://astraltrack.atlassian.net/browse/UIKIT-309
  // it('Props:emptyCellValue: по дефолту для пустого значения отображается -', async () => {
  //   renderWithTheme(
  //     <DataGrid<{ name?: string }>
  //       keyId="name"
  //       rows={[{}]}
  //       columns={[
  //         {
  //           field: 'name',
  //           label: 'Наименование',
  //         },
  //       ]}
  //     />,
  //   );
  //
  //   const emptySymbol = screen.getByText('-');
  //
  //   expect(emptySymbol).toBeVisible();
  // });
});
