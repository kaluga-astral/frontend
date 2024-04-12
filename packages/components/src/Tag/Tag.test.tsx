import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';
import { describe, expect, it, vi } from 'vitest';

import { TagBadge } from '../TagBadge';

import { Tag } from './Tag';

describe('Tag', () => {
  it('Ref доступен', () => {
    const resultRefMock = { current: null };

    const TagWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRefMock.current = ref.current;
      }, []);

      return <Tag ref={ref} />;
    };

    renderWithTheme(<TagWithRef />);
    expect(resultRefMock.current).not.toBeNull();
  });

  it('Callback Ref доступен', () => {
    const callbackRefSpy = vi.fn();

    renderWithTheme(<Tag ref={callbackRefSpy} />);
    expect(callbackRefSpy).toBeCalledWith(expect.any(HTMLElement));
  });

  it('Компонент работает с data атрибутами', () => {
    const tagTestId = 'test-id';

    renderWithTheme(<Tag data-testid={tagTestId} />);

    const tag = screen.queryByTestId(tagTestId);

    expect(tag).toBeVisible();
  });

  it('Дополнительный контент отображается, если передан startAddon', () => {
    const label = 'Тег';
    const badgeContent = '12';

    renderWithTheme(
      <Tag
        label={label}
        startAddon={(props) => (
          <TagBadge {...props} badgeContent={badgeContent} />
        )}
      />,
    );

    const badge = screen.getByText(badgeContent);

    expect(badge).toBeVisible();
  });

  it('Дополнительный контент отображается, если передан endAddon', () => {
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

    const badge = screen.getByText(badgeContent);

    expect(badge).toBeVisible();
  });

  it('Кастомная иконка удаления отображается при переданном пропсе onDelete', () => {
    const handleDeleteSpy = vi.fn();
    const deleteIconTestId = 'custom-icon';
    const customIcon = <div data-testid={deleteIconTestId} />;

    renderWithTheme(<Tag onDelete={handleDeleteSpy} deleteIcon={customIcon} />);

    const deleteIcon = screen.queryByTestId(deleteIconTestId);

    expect(deleteIcon).toBeVisible();
  });
});
