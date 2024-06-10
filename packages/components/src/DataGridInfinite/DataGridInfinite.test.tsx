import { describe, expect, it, vi } from 'vitest';
import {
  render,
  renderWithTheme,
  screen,
  userEvents,
  waitFor,
} from '@astral/tests';
import { VirtuosoMockContext } from 'react-virtuoso';
import { theme } from '@astral/tests/src/theme';
import { useState } from 'react';

import { styled } from '../styles/styled';
import { DataGrid, type DataGridColumns, type DataGridSort } from '../DataGrid';
import { ThemeProvider } from '../ThemeProvider';

import { DataGridInfinite } from './DataGridInfinite';
import { makeDataList } from './faker';

const DataGridInfiniteWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

type DataType = {
  id: string;
  documentName: string;
  direction: string;
  createDate: string;
};

const fakeData = makeDataList(10);

describe('DataGridInfinite', () => {
  it('Элементы отображаются в таблице', async () => {
    const columns: DataGridColumns<DataType>[] = [
      {
        field: 'documentName',
        label: 'Наименование документа',
        sortable: true,
      },
      {
        field: 'direction',
        label: 'Направление',
        sortable: true,
      },
      {
        field: 'createDate',
        label: 'Дата создания',
        sortable: true,
      },
      {
        label: 'Действия',
        sortable: false,
        align: 'center',
        width: '1%',
      },
    ];
    const onEndReachedSpy = vi.fn();

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <DataGridInfinite
            keyId="id"
            rows={fakeData}
            onEndReached={onEndReachedSpy}
            columns={columns}
          />
        </DataGridInfiniteWrapper>
      </ThemeProvider>,
      {
        wrapper: ({ children }) => (
          <VirtuosoMockContext.Provider
            value={{ viewportHeight: 300, itemHeight: 100 }}
          >
            {children}
          </VirtuosoMockContext.Provider>
        ),
      },
    );

    const tbody = screen.getByRole('tableBody');

    await waitFor(() => {
      expect(tbody.children.length).toBeGreaterThan(0);
    });
  });

  it('Названия колонок отображаются', () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
      },
    ];

    renderWithTheme(
      <DataGridInfinite keyId="id" rows={[]} columns={columns} />,
    );

    const title = screen.getByText('Наименование');

    expect(title).toBeVisible();
  });

  it('Иконка сортировки отображается при sortable=true', () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
        sortable: true,
      },
    ];

    renderWithTheme(
      <DataGridInfinite keyId="id" rows={[]} columns={columns} />,
    );

    const icon = screen.getByText('Наименование').querySelector('svg');

    expect(icon).not.toBeNull();
  });

  it('OnSort вызывается при нажатии на head cell', async () => {
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
          rows={[{ name: 'Vasya' }, { name: 'Petya' }]}
          sorting={sorting}
          onSort={handleSort}
          columns={columns}
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

  it('Данные, содержащиеся в field отображаются', async () => {
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

  it('Placeholder отображается при отсутствии данных', async () => {
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

  it('Данные, содержащиеся в row, передаются в onRowClick при нажатии на строку', async () => {
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

  it('Текст "Конец списка" показывается, если была дополнительная загрузка данных', async () => {
    const TestComponent = () => {
      const [isEndReached, setIsEndReached] = useState(false);

      const handleReachEnd = () => {
        setIsEndReached(true);
      };

      return (
        <ThemeProvider theme={theme}>
          <DataGridInfinite
            rows={[{ name: 'Vasya' }]}
            keyId="name"
            columns={[
              {
                field: 'name',
                label: 'Наименование',
              },
            ]}
            isEndReached={isEndReached}
            onEndReached={handleReachEnd}
          />
        </ThemeProvider>
      );
    };

    render(<TestComponent />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider
          value={{ viewportHeight: 300, itemHeight: 100 }}
        >
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });

    const endText = screen.getByText('Конец списка');

    expect(endText).toBeVisible();
  });

  it('Текст "Конец списка" не показывается, если не было дополнительной загрузки данных', async () => {
    const TestComponent = () => {
      const handleReachEnd = vi.fn();

      return (
        <ThemeProvider theme={theme}>
          <DataGridInfinite
            rows={[{ name: 'Vasya' }]}
            keyId="name"
            columns={[
              {
                field: 'name',
                label: 'Наименование',
              },
            ]}
            isEndReached={true}
            onEndReached={handleReachEnd}
          />
        </ThemeProvider>
      );
    };

    render(<TestComponent />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider
          value={{ viewportHeight: 300, itemHeight: 100 }}
        >
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });

    const endText = screen.queryByText('Конец списка');

    expect(endText).not.toBeInTheDocument();
    vi.clearAllMocks();
  });
});
