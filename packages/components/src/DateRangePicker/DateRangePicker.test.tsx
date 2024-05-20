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
      const user = userEvents.setup();

      const { onChangeStartDateSpy } = setupPicker();

      await user.click(screen.getByPlaceholderText('inputA'));

      const dateBtn = screen.getAllByText('15')[0];

      await user.click(dateBtn);
      expect(onChangeStartDateSpy).toBeCalled();

      expect(
        onChangeStartDateSpy.mock.calls[0][0] instanceof Date,
      ).toBeTruthy();

      expect(onChangeStartDateSpy.mock.calls[0][0].toISOString()).toBe(
        '2022-02-15T00:00:00.000Z',
      );
    });

    it('При выборе даты во втором пикере', async () => {
      const user = userEvents.setup();

      const { onChangeEndDateSpy } = setupPicker();

      await user.click(screen.getByPlaceholderText('inputB'));

      const dateBtnB = screen.getAllByText('15')[1];

      await user.click(dateBtnB);
      expect(onChangeEndDateSpy).toBeCalled();
      expect(onChangeEndDateSpy.mock.calls[0][0] instanceof Date).toBeTruthy();

      expect(onChangeEndDateSpy.mock.calls[0][0].toISOString()).toBe(
        '2022-03-15T00:00:00.000Z',
      );
    });
  });

  describe('Пикер не позволяет выбрать дату', () => {
    it('Меньше указанной в minDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          minDate={new Date('2022-02-09')}
        />,
      );

      await user.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('8')[0];

      expect(btn).toBeDisabled();
    });

    it('Больше указанной в maxDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          maxDate={new Date('2022-02-12')}
        />,
      );

      await user.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('13')[0];

      expect(btn).toBeDisabled();
    });
  });

  describe('Пикер позволяет выбрать дату', () => {
    it('Равной minDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          minDate={new Date('2022-02-09')}
        />,
      );

      await user.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('9')[0];

      expect(btn).not.toBeDisabled();
    });

    it('Равной maxDate', async () => {
      const user = userEvents.setup();

      renderWithTheme(
        <DateRangePicker
          startDateProps={{ inputProps: { placeholder: 'inputA' } }}
          maxDate={new Date('2022-02-09')}
        />,
      );

      await user.click(screen.getByPlaceholderText('inputA'));

      const btn = screen.getAllByText('9')[0];

      expect(btn).not.toBeDisabled();
    });
  });

  it('Смещение даты для value обнуляется', async () => {
    const user = userEvents.setup();

    renderWithTheme(
      <DateRangePicker
        startDateProps={{
          inputProps: { placeholder: 'inputA' },
          value: new Date('2022-12-16T18:59:00Z'),
        }}
        maxDate={new Date('2022-02-09')}
      />,
    );

    await user.click(screen.getByPlaceholderText('inputA'));

    const selected = screen.getAllByText('16')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('Активная дата помечается в календаре как выбранная', async () => {
    const user = userEvents.setup();

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

    await user.click(screen.getByPlaceholderText('inputA'));

    const selected = screen.getAllByText('9')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('Пикер закрывается при выборе обоих дат, в состоянии управляемого компонента', async () => {
    const user = userEvents.setup({
      skipHover: true,
    });

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
    await user.click(screen.getByPlaceholderText('inputA'));
    await user.click(screen.getAllByText('15')[0]);
    await user.click(screen.getAllByText('15')[1]);

    const popover = screen.queryByRole('presentation');

    expect(popover).not.toBeInTheDocument();
  });

  it('На одном календаре можно выбрать две даты', async () => {
    const user = userEvents.setup();

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

    await user.click(inputA);
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryAllByRole('presentation').length).toBeTruthy();
    await user.click(screen.getAllByText('15')[0]);
    await user.click(screen.getAllByText('17')[0]);
    expect((inputA as HTMLInputElement).value).not.toBe('');
    expect((inputB as HTMLInputElement).value).not.toBe('');
  });

  it('Второй календарь отображает следующий месяц от выбранной даты первого календаря', async () => {
    const user = userEvents.setup({
      skipHover: true,
    });

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

    await user.click(inputA);

    const firstCalendarPrevMonthButton = screen.getAllByRole('button', {
      name: 'Предыдущий месяц',
    })[0];

    await user.click(firstCalendarPrevMonthButton);
    await user.click(screen.getAllByText('15')[0]);
    await user.keyboard('{Escape}');
    await user.click(inputB);
    await user.click(screen.getAllByText('15')[1]);
    expect((inputB as HTMLInputElement).value).toBe('15.02.2022');
    // TODO Разобраться со скоростью выполнения теста, в ci падает по таймауту в 3s, на локале выполняется примерно за 1.3s
    // https://track.astral.ru/soft/browse/UIKIT-1352
  }, 5000);

  it('Первый календарь отображает предыдущий месяц от выбранной даты второго календаря', async () => {
    const user = userEvents.setup({
      skipHover: true,
    });

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

    await user.click(inputB);

    const secondCalendarPrevMonthButton = screen.getAllByRole('button', {
      name: 'Следующий месяц',
    })[1];

    await user.click(secondCalendarPrevMonthButton);
    await user.click(screen.getAllByText('15')[1]);
    await user.keyboard('{Escape}');
    await user.click(inputA);
    await user.click(screen.getAllByText('15')[0]);
    expect((inputA as HTMLInputElement).value).toBe('15.03.2022');
    // TODO Разобраться со скоростью выполнения теста, в ci падает по таймауту в 3s, на локале выполняется примерно за 1.3s
    // https://track.astral.ru/soft/browse/UIKIT-1352
  }, 5000);

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

    it('Появляется при клике по input', async () => {
      const user = userEvents.setup();

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

      await user.click(inputA);

      const popover = screen.queryByRole('presentation');

      expect(popover).toBeInTheDocument();
    });

    it('Не появляется при клике по input если disabled=true', async () => {
      const user = userEvents.setup();

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

      await user.click(inputA);

      const popover = screen.queryByRole('presentation');

      expect(popover).not.toBeInTheDocument();
    });

    it('Дата выбирается, если поповер открыт кликом по иконке', async () => {
      const user = userEvents.setup();

      const { baseElement } = renderWithTheme(
        <DateRangePicker
          startDateProps={{
            inputProps: { placeholder: 'inputA' },
          }}
        />,
      );

      const calendarEndAdornment = baseElement.getElementsByTagName('svg')[0];

      await user.click(calendarEndAdornment);

      const dayButton = screen.getAllByText('15')[0];

      await user.click(dayButton);

      const inputA = screen.getByPlaceholderText('inputA');

      expect((inputA as HTMLInputElement).value).not.toBe('');
    });
  });
});
