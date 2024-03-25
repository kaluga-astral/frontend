import {
  act,
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
} from '@astral/tests';
import { describe, vi } from 'vitest';
import { useState } from 'react';

import { DateRangePicker } from './DateRangePicker';

describe('DateRangePicker', () => {
  beforeAll(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2022-02-10'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe('onChange принимает объект Date', () => {
    const setupPicker = () => {
      const onChangeStartDateSpy = vi.fn();
      const onChangeEndDateSpy = vi.fn();

      renderWithTheme(
        <DateRangePicker
          startDateProps={{
            onChange: onChangeStartDateSpy,
            inputProps: { placeholder: 'inputA' },
          }}
          endDateProps={{
            onChange: onChangeEndDateSpy,
            inputProps: { placeholder: 'inputB' },
          }}
        />,
      );

      return { onChangeStartDateSpy, onChangeEndDateSpy };
    };

    it('При выборе даты в первом пикере', async () => {
      const { onChangeStartDateSpy } = setupPicker();

      fireEvent.click(screen.getByPlaceholderText('inputA'));

      const dateBtn = screen.getAllByText('15')[0];

      await userEvents.click(dateBtn);
      expect(onChangeStartDateSpy).toBeCalled();

      expect(
        onChangeStartDateSpy.mock.calls[0][0] instanceof Date,
      ).toBeTruthy();

      expect(onChangeStartDateSpy.mock.calls[0][0].toISOString()).toBe(
        '2022-02-15T00:00:00.000Z',
      );
    });

    it('При выборе даты во втором пикере', async () => {
      const { onChangeEndDateSpy } = setupPicker();

      fireEvent.click(screen.getByPlaceholderText('inputB'));

      const dateBtnB = screen.getAllByText('15')[1];

      await userEvents.click(dateBtnB);
      expect(onChangeEndDateSpy).toBeCalled();
      expect(onChangeEndDateSpy.mock.calls[0][0] instanceof Date).toBeTruthy();

      expect(onChangeEndDateSpy.mock.calls[0][0].toISOString()).toBe(
        '2022-03-15T00:00:00.000Z',
      );
    });
  });

  describe('Пикер не позволяет выбрать дату', () => {
    it('Меньше указанной в minDate', () => {
      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          minDate={new Date('2022-02-09')}
        />,
      );

      fireEvent.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('8')[0];

      expect(btn).toBeDisabled();
    });

    it('Больше указанной в maxDate', () => {
      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          maxDate={new Date('2022-02-12')}
        />,
      );

      fireEvent.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('13')[0];

      expect(btn).toBeDisabled();
    });
  });

  describe('Пикер позволяет выбрать дату', () => {
    it('Равной minDate', () => {
      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          minDate={new Date('2022-02-09')}
        />,
      );

      fireEvent.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('9')[0];

      expect(btn).not.toBeDisabled();
    });

    it('Равной maxDate', () => {
      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          maxDate={new Date('2022-02-09')}
        />,
      );

      fireEvent.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('9')[0];

      expect(btn).not.toBeDisabled();
    });
  });

  it('Смещение даты для value обнуляется', () => {
    renderWithTheme(
      <DateRangePicker
        startDateProps={{
          inputProps: { placeholder: 'inputA' },
          value: new Date('2022-12-16T18:59:00Z'),
        }}
        maxDate={new Date('2022-02-09')}
      />,
    );

    fireEvent.click(screen.getByPlaceholderText('inputA'));

    const selected = screen.getAllByText('16')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('Активная дата помечается в календаре как выбранная', async () => {
    const callbacks: { setValue: (date?: Date) => void } = {
      setValue: () => undefined,
    };

    const TestComponent = () => {
      const [value, setValue] = useState<Date | undefined>();

      callbacks.setValue = setValue;

      return (
        <DateRangePicker
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
            value,
            onChange: setValue,
          }}
        />
      );
    };

    renderWithTheme(<TestComponent />);

    await act(() => {
      callbacks.setValue(new Date('2022-03-09'));
    });

    fireEvent.click(screen.getByPlaceholderText('inputA'));

    const selected = screen.getAllByText('9')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('Пикер закрывается при выборе обоих дат, в состоянии управляемого компонента', async () => {
    const TestComponent = () => {
      const [valueA, setValueA] = useState<Date | undefined>();
      const [valueB, setValueB] = useState<Date | undefined>();

      return (
        <DateRangePicker
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
            value: valueA,
            onChange: setValueA,
          }}
          endDateProps={{
            inputProps: { placeholder: 'inputB' },
            value: valueB,
            onChange: setValueB,
          }}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.click(screen.getByPlaceholderText('inputA'));
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryAllByRole('presentation').length).toBeTruthy();

    await act(async () => {
      await userEvents.click(screen.getAllByText('15')[0]);
    });

    await act(async () => {
      await userEvents.click(screen.getAllByText('15')[1]);
    });

    expect(screen.queryAllByRole('presentation')).toStrictEqual([]);
  });

  it('На одном календаре можно выбрать две даты', async () => {
    renderWithTheme(
      <DateRangePicker
        startDateProps={{
          inputProps: { placeholder: 'inputA' },
        }}
        endDateProps={{
          inputProps: { placeholder: 'inputB' },
        }}
      />,
    );

    const inputA = screen.getByPlaceholderText('inputA');
    const inputB = screen.getByPlaceholderText('inputB');

    fireEvent.click(inputA);
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryAllByRole('presentation').length).toBeTruthy();

    await act(async () => {
      await userEvents.click(screen.getAllByText('15')[0]);
    });

    await act(async () => {
      await userEvents.click(screen.getAllByText('17')[0]);
    });

    expect((inputA as HTMLInputElement).value).not.toBe('');
    expect((inputB as HTMLInputElement).value).not.toBe('');
  });

  it('Второй календарь отображает следующий месяц от выбранной даты первого календаря', async () => {
    const TestComponent = () => {
      const [dateA, setDateA] = useState<Date | undefined>();
      const [dateB, setDateB] = useState<Date | undefined>();

      return (
        <DateRangePicker
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
            onChange: setDateA,
            value: dateA,
          }}
          endDateProps={{
            inputProps: { placeholder: 'inputB' },
            onChange: setDateB,
            value: dateB,
          }}
        />
      );
    };

    renderWithTheme(<TestComponent />);

    const inputA = screen.getByPlaceholderText('inputA');
    const inputB = screen.getByPlaceholderText('inputB');

    fireEvent.click(inputA);

    const firstCalendarPrevMonthButton = screen.getAllByRole('button', {
      name: 'Предыдущий месяц',
    })[0];

    await act(async () => {
      await userEvents.click(firstCalendarPrevMonthButton);
    });

    await act(async () => {
      await userEvents.click(screen.getAllByText('15')[0]);
    });

    await userEvents.keyboard('{Escape}');
    fireEvent.click(inputB);

    await act(async () => {
      await userEvents.click(screen.getAllByText('15')[1]);
    });

    expect((inputB as HTMLInputElement).value).toBe('15.02.2022');
  });

  it('Первый календарь отображает предыдущий месяц от выбранной даты второго календаря', async () => {
    const TestComponent = () => {
      const [dateA, setDateA] = useState<Date | undefined>();
      const [dateB, setDateB] = useState<Date | undefined>();

      return (
        <DateRangePicker
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
            onChange: setDateA,
            value: dateA,
          }}
          endDateProps={{
            inputProps: { placeholder: 'inputB' },
            onChange: setDateB,
            value: dateB,
          }}
        />
      );
    };

    renderWithTheme(<TestComponent />);

    const inputA = screen.getByPlaceholderText('inputA');
    const inputB = screen.getByPlaceholderText('inputB');

    fireEvent.click(inputB);

    const secondCalendarPrevMonthButton = screen.getAllByRole('button', {
      name: 'Следующий месяц',
    })[1];

    await act(async () => {
      await userEvents.click(secondCalendarPrevMonthButton);
    });

    await act(async () => {
      await userEvents.click(screen.getAllByText('15')[1]);
    });

    await userEvents.keyboard('{Escape}');
    fireEvent.click(inputA);

    await act(async () => {
      await userEvents.click(screen.getAllByText('15')[0]);
    });

    expect((inputA as HTMLInputElement).value).toBe('15.03.2022');
  });

  describe('Popover', () => {
    it('Не появляется при фокусе', () => {
      renderWithTheme(
        <DateRangePicker
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
          }}
          endDateProps={{
            inputProps: { placeholder: 'inputB' },
          }}
        />,
      );

      const inputA = screen.getByPlaceholderText('inputA');

      fireEvent.focus(inputA);

      const popover = screen.queryByRole('presentation');

      expect(popover).not.toBeInTheDocument();
    });

    it('Появляется при клике по input', () => {
      renderWithTheme(
        <DateRangePicker
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
          }}
          endDateProps={{
            inputProps: { placeholder: 'inputB' },
          }}
        />,
      );

      const inputA = screen.getByPlaceholderText('inputA');

      fireEvent.click(inputA);

      const popover = screen.queryByRole('presentation');

      expect(popover).toBeInTheDocument();
    });

    it('Не появляется при клике по input если disabled=true', () => {
      renderWithTheme(
        <DateRangePicker
          disabled
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
          }}
          endDateProps={{
            inputProps: { placeholder: 'inputB' },
          }}
        />,
      );

      const inputA = screen.getByPlaceholderText('inputA');

      fireEvent.click(inputA);

      const popover = screen.queryByRole('presentation');

      expect(popover).not.toBeInTheDocument();
    });
  });
});
