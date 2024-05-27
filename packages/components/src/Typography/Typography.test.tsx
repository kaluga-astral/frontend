import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';
import { useEffect, useRef } from 'react';

import { Typography } from './Typography';

describe('Typography', () => {
  it('Ref доступен', () => {
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

  it('Рендерится переданный в prop component html тэг', () => {
    renderWithTheme(<Typography component="h1">Test text</Typography>);

    const typography = screen.getByRole('heading', { level: 1 });

    expect(typography).toBeInTheDocument();
  });

  it('Рендерится тэг p, если prop paragraph=true', () => {
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
