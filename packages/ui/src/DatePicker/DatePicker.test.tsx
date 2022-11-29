import { act, renderWithTheme, screen } from '@astral/tests';
import { vi } from 'vitest';

import { DatePicker } from './DatePicker';

// Протестировать любые кейсы, связанные с MaskFiled невозможно из-за того, что MaskField использует методы, не эмулируемые в rtl
describe('DatePicker', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2022-02-10'));
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

  it('Prop:minDate: в пикере нельзя выбрать дату меньше minDate', async () => {
    const onChange = vi.fn();

    renderWithTheme(
      <DatePicker onChange={onChange} minDate={new Date('2022-02-09')} />,
    );

    await act(() => screen.getByRole('textbox').focus());

    const btn = screen.getAllByText('8')[0];

    expect(btn).toBeDisabled();
  });

  it('Prop:minDate: в пикере можно выбрать дату равной minDate', async () => {
    renderWithTheme(<DatePicker minDate={new Date('2022-02-09')} />);
    await act(() => screen.getByRole('textbox').focus());

    const btn = screen.getAllByText('9')[0];

    expect(btn).not.toBeDisabled();
  });

  it('Prop:maxDate: в пикере нельзя выбрать дату больше maxDate', async () => {
    renderWithTheme(<DatePicker maxDate={new Date('2022-02-09')} />);
    await act(() => screen.getByRole('textbox').focus());

    const btn = screen.getAllByText('10')[0];

    expect(btn).toBeDisabled();
  });

  it('Prop:maxDate: в пикере можно выбрать дату равной maxDate', async () => {
    renderWithTheme(<DatePicker maxDate={new Date('2022-02-09')} />);
    await act(() => screen.getByRole('textbox').focus());

    const btn = screen.getAllByText('9')[0];

    expect(btn).not.toBeDisabled();
  });
});
