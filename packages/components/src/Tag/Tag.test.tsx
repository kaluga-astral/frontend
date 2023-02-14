import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';

import { Tag } from '.';

describe('Tag', () => {
  it('Prop:ref: присутствует', () => {
    const resultRef = { current: null };

    const TagWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Tag ref={ref} />;
    };

    renderWithTheme(<TagWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:badge: добавляет Badge', async () => {
    const label = 'Тег';
    const badge = '12';

    renderWithTheme(<Tag label={label} badge={badge} />);

    const badgeElement = screen.getByText(badge);

    expect(badgeElement).toBeVisible();
  });
});
