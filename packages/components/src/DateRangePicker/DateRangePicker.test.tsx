import {
  act,
  fireEvent,
  renderWithTheme,
  screen,
  userEvents,
} from '@astral/tests';
import { vi } from 'vitest';
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

  it('Props:onChange: при выборе даты в пикере в onChange передается объект Date', async () => {
    const onChangeA = vi.fn();
    const onChangeB = vi.fn();

    renderWithTheme(
      <DateRangePicker
        itemA={{ onChange: onChangeA, inputProps: { placeholder: 'inputA' } }}
        itemB={{ onChange: onChangeB, inputProps: { placeholder: 'inputB' } }}
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('inputA'));

    const dateBtnA = screen.getAllByText('15')[0];

    await userEvents.click(dateBtnA);
    expect(onChangeA).toBeCalled();
    expect(onChangeA.mock.calls[0][0] instanceof Date).toBeTruthy();

    expect(onChangeA.mock.calls[0][0].toISOString()).toBe(
      '2022-02-15T00:00:00.000Z',
    );

    const dateBtnB = screen.getAllByText('15')[1];

    await userEvents.click(dateBtnB);
    expect(onChangeB).toBeCalled();
    expect(onChangeB.mock.calls[0][0] instanceof Date).toBeTruthy();

    expect(onChangeB.mock.calls[0][0].toISOString()).toBe(
      '2022-03-15T00:00:00.000Z',
    );
  });

  it('Props:minDate: в пикере нельзя выбрать дату меньше minDate', async () => {
    renderWithTheme(
      <DateRangePicker
        itemA={{ inputProps: { placeholder: 'inputA' } }}
        minDate={new Date('2022-02-09')}
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('inputA'));

    const btn = screen.getAllByText('8')[0];

    expect(btn).toBeDisabled();
  });

  it('Props:minDate: в пикере можно выбрать дату равной minDate', async () => {
    renderWithTheme(
      <DateRangePicker
        itemA={{ inputProps: { placeholder: 'inputA' } }}
        minDate={new Date('2022-02-09')}
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('inputA'));

    const btn = screen.getAllByText('9')[0];

    expect(btn).not.toBeDisabled();
  });

  it('Props:maxDate: в пикере нельзя выбрать дату больше maxDate', async () => {
    renderWithTheme(
      <DateRangePicker
        itemA={{ inputProps: { placeholder: 'inputA' } }}
        maxDate={new Date('2022-02-09')}
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('inputA'));

    const btn = screen.getAllByText('10')[0];

    expect(btn).toBeDisabled();
  });

  it('Props:maxDate: в пикере можно выбрать дату равной maxDate', async () => {
    renderWithTheme(
      <DateRangePicker
        itemA={{ inputProps: { placeholder: 'inputA' } }}
        maxDate={new Date('2022-02-09')}
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('inputA'));

    const btn = screen.getAllByText('9')[0];

    expect(btn).not.toBeDisabled();
  });

  it('Props:maxDate: в пикере выбранной отображается правильная выбранная дата при использовании даты со смещением', async () => {
    renderWithTheme(
      <DateRangePicker
        itemA={{
          inputProps: { placeholder: 'inputA' },
          value: new Date('2022-12-16T18:59:00Z'),
        }}
        maxDate={new Date('2022-02-09')}
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('inputA'));

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

      return (
        <DateRangePicker
          itemA={{
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

    fireEvent.focus(screen.getByPlaceholderText('inputA'));

    const selected = screen.getAllByText('9')[0].getAttribute('aria-selected');

    expect(selected).toBeTruthy();
  });

  it('В состоянии управляемого компонента, пикер закрывается при выборе обоих дат', async () => {
    const TestComponent = () => {
      const [valueA, setValueA] = useState<Date | undefined>();
      const [valueB, setValueB] = useState<Date | undefined>();

      return (
        <DateRangePicker
          itemA={{
            inputProps: { placeholder: 'inputA' },
            value: valueA,
            onChange: setValueA,
          }}
          itemB={{
            inputProps: { placeholder: 'inputB' },
            value: valueB,
            onChange: setValueB,
          }}
        />
      );
    };

    renderWithTheme(<TestComponent />);
    fireEvent.focus(screen.getByPlaceholderText('inputA'));
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByRole('tooltip')).toBeTruthy();
    await userEvents.click(screen.getAllByText('15')[0]);
    await userEvents.click(screen.getAllByText('15')[1]);
    expect(screen.queryByRole('tooltip')).toBe(null);
  });

  it('Props:onBlur: вызывается при фокусе на стороннем элементе', async () => {
    const onBlur = vi.fn();

    renderWithTheme(
      <DateRangePicker
        onBlur={onBlur}
        itemA={{ inputProps: { placeholder: 'inputA' } }}
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('inputA'));
    // фокус вне инпута с поповером
    fireEvent.focus(document.body);
    expect(onBlur).toBeCalled();
  });

  it('Props:onBlur: не вызывается при клике мимо инпута, если поповер закрыт', async () => {
    const onBlur = vi.fn();

    renderWithTheme(<DateRangePicker onBlur={onBlur} />);
    await userEvents.click(document.body);
    expect(onBlur).not.toBeCalled();
  });
});
