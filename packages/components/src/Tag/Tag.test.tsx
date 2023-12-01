import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';

import { TagBadge } from '../TagBadge';

import { Tag } from '.';

describe('Tag', () => {
  it('Ref доступен', () => {
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
    const badgeContent = '12';

    renderWithTheme(
      <Tag
        label={label}
        endAddon={(props) => (
          <TagBadge {...props} badgeContent={badgeContent} />
        )}
      />,
    );

    const badgeElement = screen.getByText(badgeContent);

    expect(badgeElement).toBeVisible();
  });
});
