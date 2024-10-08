import { describe, expect, it, vi } from 'vitest';
import { VirtuosoMockContext } from 'react-virtuoso';
import { render, renderWithTheme, screen, userEvents } from '@astral/tests';
import { theme } from '@astral/tests/src/theme';
import { BinOutlineMd } from '@astral/icons';

import { styled } from '../styles';
import { ThemeProvider } from '../ThemeProvider';
import { ActionCell } from '../ActionCell';
import { DataGridActionCell } from '../DataGridActionCell';

import { END_OF_SCROLL_MESSAGE } from './constants';
import { NewDataGridInfinite } from './NewDataGridInfinite';

const DataGridInfiniteWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

describe('NewDataGridInfinite', () => {
  it('Названия колонок отображаются', () => {
    const columns = [
      {
        field: 'name',
        label: 'Наименование',
      },
    ];

    renderWithTheme(
      <NewDataGridInfinite
        keyId="id"
        rows={[]}
        columns={columns}
        onRetry={() => {}}
      />,
    );

    const title = screen.getByText('Наименование');

    expect(title).toBeVisible();
  });

  it('Данные в строке отображаются', async () => {
    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
            keyId="name"
            rows={[{ name: 'Vasya' }]}
            columns={[
              {
                field: 'name',
                label: 'Наименование',
              },
            ]}
            onRetry={() => {}}
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

    const title = screen.getByText('Vasya');

    expect(title).toBeVisible();
  });

  it('OnRowClick получает данные row по клику на строку', async () => {
    const onClickSpy = vi.fn();

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
            keyId="name"
            rows={[{ name: 'Vasya' }]}
            columns={[
              {
                field: 'name',
                label: 'Наименование',
              },
            ]}
            onRowClick={onClickSpy}
            onRetry={() => {}}
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

    await userEvents.click(screen.getByText('Vasya'));
    expect(onClickSpy.mock.calls[0][0]).toEqual({ name: 'Vasya' });
  });

  it('Чекбокс отображается в шапке и строке, если для таблицы указан onSelectRow', async () => {
    const onSelectRowSpy = vi.fn();

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
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

    const checkboxes = screen.queryAllByRole('checkbox');

    expect(checkboxes).toHaveLength(2);
  });

  it('Чекбокс не отображается для строки при наличии опции isNotSelectable, если для таблицы указан onSelectRow', async () => {
    const onSelectRowSpy = vi.fn();

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
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

    const checkboxes = screen.queryAllByRole('checkbox');

    expect(checkboxes).toHaveLength(1);
  });

  it('Placeholder отображается при отсутствии данных', () => {
    renderWithTheme(
      <NewDataGridInfinite
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

  it('Placeholder c ошибкой отображается при isError=true', () => {
    renderWithTheme(
      <NewDataGridInfinite
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

  it('Лоадер отображается при первичной загрузке данных', () => {
    renderWithTheme(
      <NewDataGridInfinite
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

  it('Сообщение отображается при достижении конца списка', () => {
    renderWithTheme(
      <NewDataGridInfinite
        keyId="id"
        isEndReached
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

    const title = screen.getByText(END_OF_SCROLL_MESSAGE);

    expect(title).toBeVisible();
  });

  it('OnRetry вызывается при нажатии на кнопку "Попробовать снова"', async () => {
    const onRetrySpy = vi.fn();

    renderWithTheme(
      <NewDataGridInfinite
        keyId="id"
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

    await userEvents.click(screen.getByRole('button'));
    expect(onRetrySpy).toHaveBeenCalled();
  });

  it('Строка не доступна для взаимодействия, если isDisabled=true', async () => {
    const onClickSpy = vi.fn();

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
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

    await userEvents.click(screen.getByText('Vasya'));
    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('Строка не доступна для взаимодействия, если loading=true и isBlockingOperation=true', async () => {
    const onClickSpy = vi.fn();

    const FAKE_ACTIONS = {
      main: [
        {
          name: 'Удалить',
          loading: true,
          loadingNote: 'Происходит удаление',
          isBlockingOperation: true,
        },
      ],
    };

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
            keyId="name"
            rows={[{ name: 'Vasya' }]}
            columns={[
              {
                field: 'name',
                label: 'Наименование',
              },
              {
                field: 'actions',
                label: 'Действие',
                renderCell: (row) => (
                  <DataGridActionCell row={row} actions={FAKE_ACTIONS} />
                ),
              },
            ]}
            onRetry={() => {}}
            onRowClick={onClickSpy}
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

    await userEvents.click(screen.getByText('Vasya'));
    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('Tooltip c причиной блокировки при загрузке отображается, если loading=true и isBlockingOperation=true', async () => {
    const onClickSpy = vi.fn();

    const fakeLoadingNote = 'Происходит удаление';

    const FAKE_ACTIONS = {
      main: [
        {
          name: 'Удалить',
          loading: true,
          loadingNote: fakeLoadingNote,
          isBlockingOperation: true,
        },
      ],
    };

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
            keyId="name"
            rows={[{ name: 'Vasya' }]}
            columns={[
              {
                field: 'name',
                label: 'Наименование',
              },
              {
                field: 'actions',
                label: 'Действие',
                renderCell: (row) => (
                  <DataGridActionCell row={row} actions={FAKE_ACTIONS} />
                ),
              },
            ]}
            onRetry={() => {}}
            onRowClick={onClickSpy}
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

    const row = screen.getByLabelText(fakeLoadingNote);

    await userEvents.hover(row);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent(fakeLoadingNote);
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

    render(
      <ThemeProvider theme={theme}>
        <DataGridInfiniteWrapper>
          <NewDataGridInfinite
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

    const button = screen.getByRole('button');

    await userEvents.click(button);
    expect(onDeleteSpy).toHaveBeenCalled();
  });
});
