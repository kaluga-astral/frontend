import { act, renderWithTheme, screen } from '@astral/tests';
import { vi } from 'vitest';

import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2022, 1, 10));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('Prop:onChange: при выборе даты в пикере в onChange передается объект Date', async () => {
    const onChange = vi.fn();

    renderWithTheme(<DatePicker onChange={onChange} />);
    await act(() => screen.getByRole('textbox').focus());
    await act(() => screen.getAllByText('10')[0].click());
    expect(onChange.mock.calls[0][0] instanceof Date).toBeTruthy();

    expect(onChange.mock.calls[0][0].toISOString()).toBe(
      '2022-02-10T00:00:00.000Z',
    );
  });
});
