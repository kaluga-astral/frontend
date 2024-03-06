import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';

import { Link } from '.';

describe('Link', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const LinkWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Link ref={ref} />;
    };

    renderWithTheme(<LinkWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Иконка отображается', () => {
    const label = 'Link';

    renderWithTheme(<Link children={label} withAdornment="end" />);

    const icon = screen.getByText('Link').getElementsByTagName('svg')[0];

    expect(icon).toBeVisible();
    renderWithTheme(<Link children={label} withAdornment="start" />);
    expect(icon).toBeVisible();
  });
});
