import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';

import { DataGridPagination } from './DataGridPagination';

const TEST_DATA = [
  { page: 4, totalCount: 31, expected: '31 — 31 из 31 записей' },
  { page: 3, totalCount: 24, expected: '21 — 24 из 24 записей' },
  { page: 2, totalCount: 20, expected: '11 — 20 из 20 записей' },
  { page: 2, totalCount: 19, expected: '11 — 19 из 19 записей' },
];

describe('DataGridPagination', () => {
  it.each(TEST_DATA)(
    'Props:page=$page:totalCount=$totalCount: текст пагинации "$expected"',
    ({ totalCount, page, expected }) => {
      renderWithTheme(
        <DataGridPagination
          totalCount={totalCount}
          page={page}
          rowsPerPage={10}
        />,
      );

      const text = screen.getByText(expected);

      expect(text).toBeInTheDocument();
    },
  );

  it('Props:totalCount=11:rowsPerPage=10: пагинация не отображается', () => {
    const { container } = renderWithTheme(
      <DataGridPagination page={1} totalCount={1} rowsPerPage={10} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('Select не отображается, при отсутствии onSetCountPerPage', () => {
    renderWithTheme(
      <DataGridPagination
        totalCount={30}
        onChange={() => {}}
        rowsPerPage={10}
        page={1}
      />,
    );

    const buttons = screen.getAllByRole('button');
    const selectButton = buttons.find((button) => button.textContent === '10');

    expect(selectButton).toBeUndefined();
  });

  it('Select отображается, при onSetCountPerPage', () => {
    renderWithTheme(
      <DataGridPagination
        totalCount={30}
        onChange={() => {}}
        onSetCountPerPage={() => {}}
        page={1}
      />,
    );

    const buttons = screen.getAllByRole('button');
    const selectButton = buttons.find((button) => button.textContent === '20');

    expect(selectButton).toBeInTheDocument();
  });

  it('Кастомные опции отображаются, если задан rowsPerPageOptions', async () => {
    const ROWS_PER_PAGE_OPTION = [5, 10, 15, 20];

    renderWithTheme(
      <DataGridPagination
        totalCount={30}
        onChange={() => {}}
        onSetCountPerPage={() => {}}
        rowsPerPage={ROWS_PER_PAGE_OPTION[2]}
        rowsPerPageOptions={ROWS_PER_PAGE_OPTION}
        page={3}
      />,
    );

    const buttons = screen.getAllByRole('button');
    const selectButton = buttons.find((button) => button.textContent === '15');

    expect(selectButton).toBeInTheDocument();
  });
});
