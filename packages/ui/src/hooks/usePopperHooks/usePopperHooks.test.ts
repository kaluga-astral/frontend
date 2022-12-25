import { RefObject } from 'react';
import { act, fireEvent, renderHook, userEvents } from '@astral/tests';
import { expect, vi } from 'vitest';

import { usePopperHooks } from './usePopperHooks';

describe('usePopperHooks', () => {
  const prepare = () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    const div = document.createElement('div');
    const inputIn = document.createElement('input');
    const inputOut = document.createElement('input');

    inputIn.setAttribute('type', 'text');
    inputOut.setAttribute('type', 'text');
    div.appendChild(inputIn);
    document.body.appendChild(div);
    document.body.appendChild(inputOut);

    const ref = { current: div } as RefObject<HTMLElement>;

    const { result, rerender } = renderHook(() =>
      usePopperHooks({ onOpen, onClose, ref }),
    );

    return {
      onOpen,
      onClose,
      rerender,
      inputOut,
      result,
    };
  };

  it('при вызове openPopper, onOpen вызывается', () => {
    const { onOpen, result } = prepare();

    act(() => {
      result.current.openPopper();
    });

    expect(onOpen).toBeCalled();
  });

  it('при вызове openPopper, onClose не вызывается', () => {
    const { onClose, result } = prepare();

    act(() => {
      result.current.openPopper();
    });

    expect(onClose).not.toBeCalled();
  });

  it('стейт активности меняется при вызове openPopper и closePopper', async () => {
    const { rerender, result } = prepare();

    await act(() => {
      result.current.openPopper();
    });

    rerender();
    expect(result.current.isOpenPopper).toBe(true);

    await act(() => {
      result.current.closePopper();
    });

    rerender();
    expect(result.current.isOpenPopper).toBe(false);
  });

  it('стейт активности = false при использовании расширенных способов: фокус по внешнему инпуту', async () => {
    const { rerender, result, inputOut } = prepare();

    await act(() => {
      result.current.openPopper();
    });

    rerender();
    fireEvent.focus(inputOut);
    rerender();
    expect(result.current.isOpenPopper).toBe(false);
  });

  it('стейт активности = false при использовании расширенных способов: клик по Escape', async () => {
    const { rerender, result } = prepare();

    await act(() => {
      result.current.openPopper();
    });

    rerender();
    await userEvents.keyboard('{Escape}');
    rerender();
    expect(result.current.isOpenPopper).toBe(false);
  });

  it('стейт активности = false при использовании расширенных способов: клик вне отслеживаемого рефа', async () => {
    const { rerender, result } = prepare();

    await act(() => {
      result.current.openPopper();
    });

    rerender();
    await userEvents.click(document.body);
    rerender();
    expect(result.current.isOpenPopper).toBe(false);
  });
});
