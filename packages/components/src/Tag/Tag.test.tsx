import { describe, expect, it, vi } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { TagBadge } from '../TagBadge';

import { Tag } from './Tag';

describe('Tag', () => {
  const CHECK_INTERACTION_REGEXP = /pointer-events: none/;

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

  describe('Дополнительный контент отображается', () => {
    it('Если передан startAddon', () => {
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

    it('Если передан endAddon', () => {
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
  });

  it('Кастомная иконка удаления отображается при переданном пропсе onDelete', () => {
    const onDeleteSpy = vi.fn();
    const deleteIconTestId = 'custom-icon';
    const customIcon = <div data-testid={deleteIconTestId} />;

    renderWithTheme(<Tag onDelete={onDeleteSpy} deleteIcon={customIcon} />);

    const deleteIcon = screen.queryByTestId(deleteIconTestId);

    expect(deleteIcon).toBeVisible();
  });

  it('OnClick вызывается при нажатии на тег', async () => {
    const onClickSpy = vi.fn();
    const tagTestId = 'tagTestId';

    renderWithTheme(<Tag onClick={onClickSpy} data-testid={tagTestId} />);

    const tag = screen.getByTestId(tagTestId);

    await userEvents.click(tag);
    expect(onClickSpy).toBeCalled();
  });

  it('OnDelete вызывается при нажатии на иконку удаления', async () => {
    const onDeleteSpy = vi.fn();
    const deleteIconTestId = 'deleteIconTestId';

    const deleteIcon = <span data-testid={deleteIconTestId} />;

    renderWithTheme(<Tag onDelete={onDeleteSpy} deleteIcon={deleteIcon} />);

    const deleteIconElement = screen.getByTestId(deleteIconTestId);

    await userEvents.click(deleteIconElement);
    expect(onDeleteSpy).toBeCalled();
  });

  it('Тег недоступен для взаимодействия, если disabled=true', async () => {
    const tagTestId = 'tagTestId';
    const deleteIconTestId = 'deleteIconTestId';
    const onDeleteSpy = vi.fn();

    const deleteIcon = <span data-testid={deleteIconTestId} />;

    renderWithTheme(
      <Tag
        disabled
        data-testid={tagTestId}
        onDelete={onDeleteSpy}
        deleteIcon={deleteIcon}
      />,
    );

    const tag = screen.getByTestId(tagTestId);
    const deleteIconElement = screen.getByTestId(deleteIconTestId);

    await expect(() => userEvents.click(tag)).rejects.toThrow(
      CHECK_INTERACTION_REGEXP,
    );

    await expect(() => userEvents.click(deleteIconElement)).rejects.toThrow(
      CHECK_INTERACTION_REGEXP,
    );
  });
});
