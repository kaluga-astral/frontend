import { describe, expect, it, vi } from 'vitest';
import { type RefObject } from 'react';
import { fireEvent, renderHook } from '@astral/tests';

import { useFocusAwayEffect } from './useFocusAwayEffect';

describe('useFocusAwayEffect', () => {
  it('Props:isActive=true: при фокусе вне целевого дива, onFocusAway вызывается', () => {
    const onFocusAway = vi.fn();
    const div = document.createElement('div');
    const input = document.createElement('input');

    input.setAttribute('type', 'text');
    document.body.appendChild(input);
    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() => useFocusAwayEffect({ isActive: true, onFocusAway, ref }));
    fireEvent.focus(input);
    expect(onFocusAway).toBeCalledTimes(1);
  });

  it('Props:isActive=true: при фокусе внутри целевого дива, onFocusAway не вызывается', () => {
    const onFocusAway = vi.fn();
    const div = document.createElement('div');
    const input = document.createElement('input');

    input.setAttribute('type', 'text');
    div.appendChild(input);
    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() => useFocusAwayEffect({ isActive: true, onFocusAway, ref }));
    fireEvent.focus(input);
    expect(onFocusAway).toBeCalledTimes(0);
  });

  it('Props:isActive=false: при фокусе вне целевого дива, onFocusAway не вызывается', () => {
    const onFocusAway = vi.fn();
    const div = document.createElement('div');
    const input = document.createElement('input');

    input.setAttribute('type', 'text');
    document.body.appendChild(input);
    document.body.appendChild(div);

    const ref = { current: div } as RefObject<HTMLElement>;

    renderHook(() => useFocusAwayEffect({ isActive: false, onFocusAway, ref }));
    fireEvent.focus(input);
    expect(onFocusAway).toBeCalledTimes(0);
  });
});
