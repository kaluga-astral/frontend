import { renderHook } from '@astral/tests';
import { theme } from '@astral/tests/src/theme';

import { useTypographyColor } from './useTypographyColor';

describe('useTypographyColor', () => {
  it('Возвращает цвет #072D57', () => {
    const { result } = renderHook(() => useTypographyColor({ color: 'text' }));

    expect(result.current).toBeDefined();

    if (result.current) {
      const colorFunction = result.current(theme);

      expect(colorFunction).toBe('#072D57');
    }
  });

  it('Возвращает цвет #FCDADA', () => {
    const { result } = renderHook(() =>
      useTypographyColor({ color: 'error', colorIntensity: '200' }),
    );

    expect(result.current).toBeDefined();

    if (result.current) {
      const colorFunction = result.current(theme);

      expect(colorFunction).toBe('#FCDADA');
    }
  });

  it('Возвращает undefined, если цвет не указан', () => {
    const { result } = renderHook(() => useTypographyColor({}));

    expect(result.current).toBeUndefined();
  });
});
