import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';

import { Link } from './Link';

describe('Link', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const LinkWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Link href="/" ref={ref} />;
    };

    renderWithTheme(<LinkWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Иконка слева отображается при withAdornment="start"', () => {
    renderWithTheme(
      <Link href="/" withAdornment="start">
        Link
      </Link>,
    );

    const icon = screen.getByText('Link').getElementsByTagName('svg')[0];

    expect(icon).toBeVisible();
  });

  it('Иконка справа отображается при withAdornment="end"', () => {
    renderWithTheme(
      <Link href="/" withAdornment="end">
        Link
      </Link>,
    );

    const icon = screen.getByText('Link').getElementsByTagName('svg')[0];

    expect(icon).toBeVisible();
  });
});
