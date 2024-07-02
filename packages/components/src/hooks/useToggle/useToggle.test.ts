import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@astral/tests';

import { useToggle } from './useToggle';

describe('useToggle', () => {
  const prepare = () => {
    const { result, rerender } = renderHook(() =>
      useToggle({ initialState: false }),
    );
    const [isActive, handleActive, handleInactive] = result.current;

    return {
      isActive,
      handleActive,
      handleInactive,
      result,
      rerender,
    };
  };

  it('isActive: Меняем стейт с помощью handleActive на true', () => {
    let { result, isActive, handleActive } = prepare();

    act(() => handleActive());
    isActive = result.current[0];
    expect(isActive).toBeTruthy();
  });

  it('isActive: Меняем стейт с помощью handleInactive на false', () => {
    let { result, isActive, handleInactive, rerender } = prepare();

    rerender({ initialState: false });
    act(() => handleInactive());
    isActive = result.current[0];
    expect(isActive).toBeFalsy();
  });
});
