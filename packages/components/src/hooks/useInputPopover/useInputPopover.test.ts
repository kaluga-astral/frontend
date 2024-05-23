import { describe, expect, it, vi } from 'vitest';
import { type RefObject } from 'react';
import { act, fireEvent, renderHook, userEvents } from '@astral/tests';

import { useInputPopover } from './useInputPopover';

describe('useInputPopover', () => {
  const prepare = () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    const onBlur = vi.fn();
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
      useInputPopover({ onOpen, onClose, onBlur, ref }),
    );

    return {
      onOpen,
      onClose,
      onBlur,
      rerender,
      inputOut,
      result,
    };
  };

  it('при вызове handleActivate, onOpen вызывается', () => {
    const { onOpen, result } = prepare();

    act(() => {
      result.current.openPopover();
    });

    expect(onOpen).toBeCalled();
  });

  it('при вызове handleActivate, onClose не вызывается', () => {
    const { onClose, result } = prepare();

    act(() => {
      result.current.openPopover();
    });

    expect(onClose).not.toBeCalled();
  });

  it('стейт активности меняется при вызове handleActivate и closePopper', async () => {
    const { rerender, result } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    rerender();
    expect(result.current.isOpenPopover).toBeTruthy();

    await act(() => {
      result.current.closePopover();
    });

    rerender();
    expect(result.current.isOpenPopover).toBeFalsy();
  });

  it('стейт активности = false при использовании расширенных способов: фокус по внешнему инпуту', async () => {
    const { rerender, result, inputOut } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    rerender();
    fireEvent.focus(inputOut);
    rerender();
    expect(result.current.isOpenPopover).toBeFalsy();
  });

  it('стейт активности = false при использовании расширенных способов: клик по Escape', async () => {
    const { rerender, result } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    await userEvents.keyboard('{Escape}');
    rerender();
    expect(result.current.isOpenPopover).toBeFalsy();
  });

  it('стейт активности = false при использовании расширенных способов: клик вне отслеживаемого рефа', async () => {
    const { rerender, result } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    await userEvents.click(document.body);
    rerender();
    expect(result.current.isOpenPopover).toBeFalsy();
  });

  it('если закрыть поппер через closePopper, onBlur не вызывается', async () => {
    const { result, onBlur } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    await act(() => {
      result.current.closePopover();
    });

    expect(onBlur).not.toBeCalled();
  });

  it('если закрыть поппер кликом Esc, onBlur не вызывается', async () => {
    const { result, onBlur } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    await userEvents.keyboard('{Escape}');
    expect(onBlur).not.toBeCalled();
  });

  it('если закрыть поппер кликом вне отслеживаемого рефа, onBlur вызывается', async () => {
    const { result, onBlur } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    await userEvents.click(document.body);
    expect(onBlur).toBeCalled();
  });

  it('если закрыть поппер, сфокусировавшись вне отслеживаемого рефа, onBlur вызывается', async () => {
    const { result, onBlur, inputOut } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    fireEvent.focus(inputOut);
    expect(onBlur).toBeCalled();
  });

  it('если закрыть поппер через Esc, а потом сфокусироваться вне отслеживаемого рефа, onBlur вызывается', async () => {
    const { result, onBlur, inputOut } = prepare();

    await act(() => {
      result.current.openPopover();
    });

    await userEvents.keyboard('{Escape}');
    fireEvent.focus(inputOut);
    expect(onBlur).toBeCalled();
  });
});
