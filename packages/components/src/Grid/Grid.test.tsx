import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@astral/tests';
import { useEffect, useRef } from 'react';

import { Grid } from './Grid';

describe('Grid', () => {
  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const GridWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Grid ref={ref}>Grid</Grid>;
    };

    renderWithTheme(<GridWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });
});
