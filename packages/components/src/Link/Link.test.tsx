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

  it('Дополнительный контент отображается, если передан startAddon или endAddon', () => {
    const label = 'Link';
    const startAddon = 'left';
    const endAddon = 'right';

    renderWithTheme(
      <Link
        children={label}
        startAddon={() => <span>{startAddon}</span>}
        endAddon={() => <span>{endAddon}</span>}
      />,
    );

    const startAddonElement = screen.getByText(startAddon);
    const endAddonElement = screen.getByText(endAddon);

    expect(startAddonElement).toBeVisible();
    expect(endAddonElement).toBeVisible();
  });
});
