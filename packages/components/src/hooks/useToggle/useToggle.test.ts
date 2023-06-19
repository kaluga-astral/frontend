import { act, renderHook } from '@astral/tests';

import { useToggle } from './useToggle';

describe('useToggle', () => {
  it.each([
    ['handleActive', true, false],
    ['handleInactive', false, true],
  ])(
    'isActive: Меняем стейт с помощью %s на %s',
    (_, expected, initialState) => {
      const { result } = renderHook(() => useToggle({ initialState }));
      let [isActive, handleActive, handleInactive] = result.current;
      const method = isActive ? handleInactive : handleActive;

      act(() => method());
      isActive = result.current[0];
      expect(isActive).toBe(expected);
    },
  );
});
