import { describe, expect, it, vi } from 'vitest';
import { type RefObject } from 'react';
import { renderHook, userEvents } from '@astral/tests';

import { useClickAwayEffect } from './useClickAwayEffect';

describe('useClickAwayEffect', () => {
  it('Props:isActive=true: при нажатии вне целевого дива вызывается onClickAway', async () => {
    const onClickAway = vi.fn();
    const div = document.createElement('div');

    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() =>
      useClickAwayEffect({ isActive: true, onClickAway: onClickAway, ref }),
    );

    await userEvents.click(document.body);
    expect(onClickAway).toBeCalled();
  });

  it('Props:isActive=true: при нажатии внутри целевого дива не вызывается onClickAway', async () => {
    const onClickAway = vi.fn();
    const div = document.createElement('div');

    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() =>
      useClickAwayEffect({ isActive: true, onClickAway: onClickAway, ref }),
    );

    await userEvents.click(div);
    expect(onClickAway).toBeCalledTimes(0);
  });

  it('Props:isActive=false: при нажатии куда угодно не вызывается onClickAway', async () => {
    const onClickAway = vi.fn();
    const div = document.createElement('div');

    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() =>
      useClickAwayEffect({ isActive: false, onClickAway: onClickAway, ref }),
    );

    await userEvents.click(document.body);
    await userEvents.click(div);
    expect(onClickAway).toBeCalledTimes(0);
  });
});
