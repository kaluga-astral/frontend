import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import {
  act,
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
} from '@astral/tests';
import { useState } from 'react';

import { DatePicker } from './DatePicker';
import { DEFAULT_PLACEHOLDER } from './constants';

// Протестировать любые кейсы, связанные с MaskFiled невозможно из-за того, что MaskField использует методы, не эмулируемые в rtl
describe('DatePicker', () => {
  beforeAll(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2022-02-10'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('ОnChange принимает объект Date при выборе даты в пикере', async () => {
    const user = userEvents.setup();
    const onChangeSpy = vi.fn();

    renderWithTheme(<DatePicker onChange={onChangeSpy} />);
    await user.click(screen.getByRole('textbox'));

    const dateBtn = screen.getAllByText('10')[0];

    await user.click(dateBtn);
    expect(onChangeSpy.mock.calls[0][0] instanceof Date).toBeTruthy();

    expect(onChangeSpy.mock.calls[0][0].toISOString()).toBe(
      '2022-02-10T00:00:00.000Z',
    );
  });

  describe('Пикер не позволяет выбрать дату', () => {
    it('Меньше указанной в minDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(<DatePicker minDate={new Date('2022-02-09')} />);
      await user.click(screen.getByRole('textbox'));

      const btn = screen.getAllByText('8')[0];

      expect(btn).toBeDisabled();
    });

    it('Больше указанной в maxDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(<DatePicker maxDate={new Date('2022-02-09')} />);
      await user.click(screen.getByRole('textbox'));

      const btn = screen.getAllByText('10')[0];

      expect(btn).toBeDisabled();
    });
  });

  describe('Пикер позволяет выбрать дату', () => {
    it('Равной minDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(<DatePicker minDate={new Date('2022-02-09')} />);
      await user.click(screen.getByRole('textbox'));

      const btn = screen.getAllByText('9')[0];

      expect(btn).not.toBeDisabled();
    });

    it('Равной maxDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(<DatePicker maxDate={new Date('2022-02-09')} />);
      await user.click(screen.getByRole('textbox'));

      const btn = screen.getAllByText('9')[0];

      expect(btn).not.toBeDisabled();
    });
  });

  it('Пикер позволяет переключить месяц когда текущее значение меньше минимального', async () => {
    const user = userEvents.setup();

    renderWithTheme(
      <DatePicker minDate={new Date()} value={new Date('2023-09-01')} />,
    );

    await user.click(screen.getByRole('textbox'));

    const nextBtn = screen.getByLabelText('Следующий месяц');
    const prevBtn = screen.getByLabelText('Предыдущий месяц');

    expect(nextBtn).not.toBeDisabled();
    expect(prevBtn).not.toBeDisabled();
  });

  it('Выбранная дата в пикере соответствует указанной в value', async () => {
    const user = userEvents.setup();

    renderWithTheme(<DatePicker value={new Date('2022-12-16T18:59:00Z')} />);
    await user.click(screen.getByRole('textbox'));

    const selected = screen.getAllByText('16')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('Выбранная дата в календаре изменяется при изменении value', async () => {
    const user = userEvents.setup();

    const callbacks: { setValue: (date?: Date) => void } = {
      setValue: () => undefined,
    };

    const TestComponent = () => {
      const [value, setValue] = useState<Date | null>();

      callbacks.setValue = setValue;

      return <DatePicker value={value} onChange={setValue} />;
    };

    renderWithTheme(<TestComponent />);

    await act(() => {
      callbacks.setValue(new Date('2022-03-09'));
    });

    await user.click(screen.getByRole('textbox'));

    const selected = screen.getAllByText('9')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  describe('Popover', () => {
    it('Не появляется при фокусе', async () => {
      renderWithTheme(
        <DatePicker
          inputProps={{ label: 'inputLabel' }}
          minDate={new Date('2022-02-09')}
        />,
      );

      const label = screen.getAllByText('inputLabel')[0];
      const input = screen.getByRole('textbox');

      [label, input].forEach((element) => {
        fireEvent.focus(element);

        const popover = screen.queryByRole('presentation');

        expect(popover).not.toBeInTheDocument();
        //Сброс фокуса на элементе
        fireEvent.focus(document.body);
      });
    });

    it('Появляется при клике по input', async () => {
      const user = userEvents.setup();

      renderWithTheme(<DatePicker />);

      const input = screen.getByRole('textbox');

      await user.click(input);

      const popover = screen.queryByRole('presentation');

      expect(popover).toBeInTheDocument();
    });

    it('Не появляется при клике по input если disabled=true', async () => {
      const user = userEvents.setup();

      renderWithTheme(<DatePicker disabled />);

      const input = screen.getByRole('textbox');

      await user.click(input);

      const popover = screen.queryByRole('presentation');

      expect(popover).not.toBeInTheDocument();
    });

    it('Placeholder по умолчанию отображается если не задан в inputProps', () => {
      renderWithTheme(<DatePicker disabled />);

      const placeholder = screen.getByPlaceholderText(DEFAULT_PLACEHOLDER);

      expect(placeholder).toBeVisible();
    });

    it('Placeholder заданный в inputProps отображается', () => {
      renderWithTheme(
        <DatePicker disabled inputProps={{ placeholder: 'Введите дату' }} />,
      );

      const placeholder = screen.getByPlaceholderText('Введите дату');

      expect(placeholder).toBeVisible();
    });
  });
});
