import {
  act,
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
} from '@astral/tests';
import { vi } from 'vitest';
import { useState } from 'react';

import { DatePicker } from './DatePicker';

// Протестировать любые кейсы, связанные с MaskFiled невозможно из-за того, что MaskField использует методы, не эмулируемые в rtl
describe('DatePicker', () => {
  beforeAll(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2022-02-10'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('Props:onChange: при выборе даты в пикере в onChange передается объект Date', async () => {
    const onChange = vi.fn();

    renderWithTheme(<DatePicker onChange={onChange} />);
    fireEvent.focus(screen.getByRole('textbox'));

    const dateBtn = screen.getAllByText('10')[0];

    await userEvents.click(dateBtn);
    expect(onChange.mock.calls[0][0] instanceof Date).toBeTruthy();

    expect(onChange.mock.calls[0][0].toISOString()).toBe(
      '2022-02-10T00:00:00.000Z',
    );
  });

  it('Props:minDate: в пикере нельзя выбрать дату меньше minDate', async () => {
    const onChange = vi.fn();

    renderWithTheme(
      <DatePicker onChange={onChange} minDate={new Date('2022-02-09')} />,
    );

    fireEvent.focus(screen.getByRole('textbox'));

    const btn = screen.getAllByText('8')[0];

    expect(btn).toBeDisabled();
  });

  it('Props:minDate: в пикере можно выбрать дату равной minDate', async () => {
    renderWithTheme(<DatePicker minDate={new Date('2022-02-09')} />);
    fireEvent.focus(screen.getByRole('textbox'));

    const btn = screen.getAllByText('9')[0];

    expect(btn).not.toBeDisabled();
  });

  it('Props:maxDate: в пикере нельзя выбрать дату больше maxDate', async () => {
    renderWithTheme(<DatePicker maxDate={new Date('2022-02-09')} />);
    fireEvent.focus(screen.getByRole('textbox'));

    const btn = screen.getAllByText('10')[0];

    expect(btn).toBeDisabled();
  });

  it('Props:maxDate: в пикере можно выбрать дату равной maxDate', async () => {
    renderWithTheme(<DatePicker maxDate={new Date('2022-02-09')} />);
    fireEvent.focus(screen.getByRole('textbox'));

    const btn = screen.getAllByText('9')[0];

    expect(btn).not.toBeDisabled();
  });

  it('Props:maxDate: в пикере выбранной отображается правильная выбранная дата при использовании даты со смещением', async () => {
    renderWithTheme(<DatePicker value={new Date('2022-12-16T18:59:00Z')} />);
    fireEvent.focus(screen.getByRole('textbox'));

    const selected = screen.getAllByText('16')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('Props:value: при изменении меняется выбранная дата в календаре', async () => {
    const callbacks: { setValue: (date?: Date) => void } = {
      setValue: () => undefined,
    };

    const TestComponent = () => {
      const [value, setValue] = useState<Date | undefined>();

      callbacks.setValue = setValue;

      return <DatePicker value={value} onChange={setValue} />;
    };

    renderWithTheme(<TestComponent />);

    await act(() => {
      callbacks.setValue(new Date('2022-03-09'));
    });

    fireEvent.focus(screen.getByRole('textbox'));

    const selected = screen.getAllByText('9')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('Props:onBlur: вызывается при фокусе на стороннем элементе', async () => {
    const onBlur = vi.fn();

    renderWithTheme(<DatePicker onBlur={onBlur} />);
    fireEvent.focus(screen.getByRole('textbox'));
    // фокус вне инпута с поповером
    fireEvent.focus(document.body);
    expect(onBlur).toBeCalled();
  });

  it('Props:onBlur: не вызывается при клике мимо инпута, если поповер закрыт', async () => {
    const onBlur = vi.fn();

    renderWithTheme(<DatePicker onBlur={onBlur} />);
    await userEvents.click(document.body);
    expect(onBlur).not.toBeCalled();
  });

  it('Props:disabled: popover не появляется при фокусе', async () => {
    renderWithTheme(
      <DatePicker
        inputProps={{ label: 'inputLabel', disabled: true }}
        minDate={new Date('2022-02-09')}
      />,
    );

    const inputWrapper = document.querySelector('div[aria-disabled]')!;
    const label = screen.getAllByText('inputLabel')[0];
    const input = screen.getByRole('textbox');

    [inputWrapper, label, input].forEach((element) => {
      fireEvent.focus(element);

      const popover = screen.queryByRole('tooltip');

      expect(popover).not.toBeInTheDocument();
      //Сброс фокуса на элементе
      fireEvent.focus(document.body);
    });
  });
});
