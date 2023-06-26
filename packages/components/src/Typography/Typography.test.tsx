import { renderWithTheme, screen } from '@astral/tests';
import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';

import { Typography } from './Typography';

describe('Typography', () => {
  it('Prop:ref: присутствует', () => {
    const resultRef = { current: null };

    const TypographyWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Typography ref={ref}>text</Typography>;
    };

    renderWithTheme(<TypographyWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:component="h1": должен рендерится как h1"', () => {
    renderWithTheme(<Typography component="h1">Test text</Typography>);

    const typography = screen.getByRole('heading', { level: 1 });

    expect(typography).toBeInTheDocument();
  });

  it('Props:paragraph=true:variant="h2": должен рендерится как параграф (p)', () => {
    renderWithTheme(
      <Typography paragraph variant="h2">
        Test text
      </Typography>,
    );

    const typography = screen.getByText('Test text');

    expect(typography).toBeInTheDocument();
    expect(typography.tagName).toBe('P');
  });
});
