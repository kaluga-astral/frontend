import { renderWithTheme, userEvents } from '@astral/tests';
import { useState } from 'react';

import { DataGrid } from './DataGrid';
import { DATA_GRID_TEST_ID_MAP } from './constants';
import { DataGridColumns, DataGridSort } from './types';

describe('DataGrid', () => {
  it('Prop:columns: отображаются названия колонок', () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
      },
    ];

    const { getByText } = renderWithTheme(
      <DataGrid keyId="id" rows={[]} columns={columns} />,
    );

    const title = getByText('Наименование');

    expect(title).toBeVisible();
  });

  it('Prop:columns:sortable: отображается иконка сортировки', () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
        sortable: true,
      },
    ];

    const { getByTestId } = renderWithTheme(
      <DataGrid keyId="id" rows={[]} columns={columns} />,
    );

    const icon = getByTestId(DATA_GRID_TEST_ID_MAP.sortIcon);

    expect(icon).toBeVisible();
  });

  it('Prop:columns:sortable: по клику на head cell вызывается onSort', async () => {
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

    const { getByText } = renderWithTheme(<TestComponent />);

    expect(currentSort).toBe(undefined);
    await userEvents.click(getByText('Наименование'));
    expect(currentSort).toEqual({ fieldId: 'name', sort: 'asc' });
    await userEvents.click(getByText('Наименование'));
    expect(currentSort).toEqual({ fieldId: 'name', sort: 'desc' });
    await userEvents.click(getByText('Наименование'));
    expect(currentSort).toBe(undefined);
  });

  it('Props:columns:field: отображает в строке данные по field', async () => {
    const { getByText } = renderWithTheme(
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

    const title = getByText('Vasya');

    expect(title).toBeVisible();
  });

  it('NoDataPlaceholder: отображается, если нет данных', async () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
      },
    ];

    const { getByText } = renderWithTheme(
      <DataGrid keyId="id" rows={[]} columns={columns} />,
    );

    const title = getByText('Нет данных');

    expect(title).toBeVisible();
  });

  it('Props:onRowClick: по клику на строку получаем данные row', async () => {
    const onRowClick = jest.fn();

    const { getByText } = renderWithTheme(
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

    await userEvents.click(getByText('Vasya'));
    expect(onRowClick.mock.calls[0][0]).toEqual({ name: 'Vasya' });
  });

  // TODO: https://astraltrack.atlassian.net/browse/UIKIT-309
  // it('Props:emptyCellValue: по дефолту для пустого значения отображается -', async () => {
  //   const { getByText } = renderWithTheme(
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
  //   const emptySymbol = getByText('-');
  //
  //   expect(emptySymbol).toBeVisible();
  // });
});
