import { renderWithTheme, screen } from '@astral/tests';
import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';

import { Typography } from './Typography';

it('Prop:ref: is present', () => {
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

describe('Typography', () => {
  it('Должен рендерится как h1 когда component="h1"', () => {
    renderWithTheme(<Typography component="h1">Test text</Typography>);

    const typography = screen.getByRole('heading', { level: 1 });

    expect(typography).toBeInTheDocument();
  });
});

describe('Typography', () => {
  it('Должен рендерится как параграф (p) когда передан пропс paragraph и variant="h2"', () => {
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
