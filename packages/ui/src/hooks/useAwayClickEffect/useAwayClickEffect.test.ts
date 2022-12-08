import { RefObject } from 'react';
import { renderHook, userEvents } from '@astral/tests';
import { vi } from 'vitest';

import { useAwayClickEffect } from './useAwayClickEffect';

describe('useAwayClickEffect', () => {
  it('Props:isActive=true: при нажатии вне целевого дива вызывается onAwayClick', async () => {
    const onAwayClick = vi.fn();
    const div = document.createElement('div');

    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() => useAwayClickEffect({ isActive: true, onAwayClick, ref }));
    await userEvents.click(document.body);
    expect(onAwayClick).toBeCalled();
  });

  it('Props:isActive=true: при нажатии внутри целевого дива не вызывается onAwayClick', async () => {
    const onAwayClick = vi.fn();
    const div = document.createElement('div');

    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() => useAwayClickEffect({ isActive: true, onAwayClick, ref }));
    await userEvents.click(div);
    expect(onAwayClick).toBeCalledTimes(0);
  });

  it('Props:isActive=false: при нажатии куда угодно не вызывается onAwayClick', async () => {
    const onAwayClick = vi.fn();
    const div = document.createElement('div');

    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() => useAwayClickEffect({ isActive: false, onAwayClick, ref }));
    await userEvents.click(document.body);
    await userEvents.click(div);
    expect(onAwayClick).toBeCalledTimes(0);
  });
});
