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
        <DataGridPagination totalCount={totalCount} page={page} />,
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
});
