import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { formatDate } from '../../utils/date';

import { StaticDaysCalendar } from './StaticDaysCalendar';

describe('StaticDaysCalendar', () => {
  beforeAll(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2022-02-10'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('Рендерится календарь относящийся к baseDate', () => {
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(
      <StaticDaysCalendar
        baseDate={baseDate}
        renderDayContent={({ date }) => formatDate(date, 'YYYY-MM-DD', '-')}
      />,
    );

    const dateBtn = screen.getAllByText('2022-02-10')[0];

    expect(dateBtn).toBeInTheDocument();
  });

  it('Рендерится календарь в котором первый день недели воскресенье при isMondayFirst=false', () => {
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(
      <StaticDaysCalendar baseDate={baseDate} isMondayFirst={false} />,
    );

    const dateBtn = screen.getAllByText('31')[0];
    const headSundayCell = screen.getAllByRole('cell')[0];

    expect(dateBtn).toBeInTheDocument();
    expect(headSundayCell.textContent).toBe('ВС');
  });

  it('Рендерится полный набор элементов при не переданном hideOutOfAvailableRangeElements', () => {
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(<StaticDaysCalendar baseDate={baseDate} />);

    const items = screen.getAllByRole('button');

    expect(items).toHaveLength(42);
  });

  it('Рендерится сокращенный набор элементов при переданном hideOutOfAvailableRangeElements=true', () => {
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(
      <StaticDaysCalendar
        baseDate={baseDate}
        hideOutOfAvailableRangeElements={true}
      />,
    );

    const items = screen.getAllByRole('button');

    expect(items).toHaveLength(28);
  });

  it('renderDayTooltipTitle вызывается для каждого элемента', () => {
    const spy = vi.fn();
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(
      <StaticDaysCalendar baseDate={baseDate} renderDayTooltipTitle={spy} />,
    );

    expect(spy).toBeCalledTimes(42);
  });

  it('renderDayContent вызывается для каждого элемента', () => {
    const spy = vi.fn();
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(
      <StaticDaysCalendar baseDate={baseDate} renderDayContent={spy} />,
    );

    expect(spy).toBeCalledTimes(42);
  });

  it('onDayHover вызывается при наведении на элемент', async () => {
    const user = userEvents.setup();
    const hoverSpy = vi.fn();
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(
      <StaticDaysCalendar baseDate={baseDate} onDayHover={hoverSpy} />,
    );

    const item = screen.getAllByText('10')[0];

    await user.hover(item);
    expect(hoverSpy).toBeCalledWith(new Date('2022-02-10T00:00:00.000Z'));
  });

  it('onChange вызывается при клике на элемент', async () => {
    const user = userEvents.setup();
    const changeSpy = vi.fn();
    const baseDate = new Date('2022-02-10T00:00:00.000Z');

    renderWithTheme(
      <StaticDaysCalendar baseDate={baseDate} onChange={changeSpy} />,
    );

    const item = screen.getAllByText('10')[0];

    await user.click(item);
    expect(changeSpy).toBeCalledWith(new Date('2022-02-10T00:00:00.000Z'));
  });
});
