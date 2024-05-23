import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@astral/tests';
import { useEffect, useRef } from 'react';

import { LegacyGrid } from './LegacyGrid';

describe('LegacyGrid', () => {
  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const LegacyGridWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <LegacyGrid ref={ref}>Grid</LegacyGrid>;
    };

    renderWithTheme(<LegacyGridWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });
});
