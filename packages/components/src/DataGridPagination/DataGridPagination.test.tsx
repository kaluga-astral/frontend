import { renderWithTheme, screen } from '@astral/tests';

import { DataGridPagination } from './DataGridPagination';

describe('DataGridPagination', () => {
  it('page=4, totalCount=31', () => {
    renderWithTheme(<DataGridPagination totalCount={31} page={4} />);

    const text = screen.getByText('31 — 31 из 31 записей');

    expect(text).toBeInTheDocument();
  });

  it('page=3, totalCount=24', () => {
    renderWithTheme(<DataGridPagination totalCount={24} page={3} />);

    const text = screen.getByText('21 — 24 из 24 записей');

    expect(text).toBeInTheDocument();
  });

  it('page=2, totalCount=20', () => {
    renderWithTheme(<DataGridPagination totalCount={20} page={2} />);

    const text = screen.getByText('11 — 20 из 20 записей');

    expect(text).toBeInTheDocument();
  });

  it('page=2, totalCount=19', () => {
    renderWithTheme(<DataGridPagination totalCount={19} page={2} />);

    const text = screen.getByText('11 — 19 из 19 записей');

    expect(text).toBeInTheDocument();
  });

  it('page=1, totalCount=10', () => {
    renderWithTheme(<DataGridPagination totalCount={10} page={1} />);

    const text = screen.getByText('1 — 10 из 10 записей');

    expect(text).toBeInTheDocument();
  });

  it('page=1, totalCount=5', () => {
    renderWithTheme(<DataGridPagination totalCount={5} page={1} />);

    const text = screen.getByText('1 — 5 из 5 записей');

    expect(text).toBeInTheDocument();
  });
});
