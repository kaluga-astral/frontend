import { renderWithTheme, screen } from '@astral/tests';

import { DataGridPagination } from './DataGridPagination';

const TEST_DATA = [
  { page: 4, totalCount: 31, expected: '31 — 31 из 31 записей' },
  { page: 3, totalCount: 24, expected: '21 — 24 из 24 записей' },
  { page: 2, totalCount: 20, expected: '11 — 20 из 20 записей' },
  { page: 2, totalCount: 19, expected: '11 — 19 из 19 записей' },
  { page: 1, totalCount: 10, expected: '1 — 10 из 10 записей' },
  { page: 1, totalCount: 5, expected: '1 — 5 из 5 записей' },
];

describe('DataGridPagination', () => {
  test.each(TEST_DATA)(
    'Props:page=$page:totalCount=$totalCount: Текст пагинации "$expected"',
    ({ totalCount, page, expected }) => {
      renderWithTheme(
        <DataGridPagination totalCount={totalCount} page={page} />,
      );

      const text = screen.getByText(expected);

      expect(text).toBeInTheDocument();
    },
  );
});
