import { useEffect, useRef } from 'react';
import {
  CHECK_INTERACTION_REGEXP,
  renderWithTheme,
  screen,
  userEvents,
} from '@astral/tests';
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

  it('OnClick не вызывается при нажатии на тег, если disabled=true', async () => {
    const tagTestId = 'tagTestId';

    renderWithTheme(<Tag disabled data-testid={tagTestId} />);

    const tag = screen.getByTestId(tagTestId);

    await expect(() => userEvents.click(tag)).rejects.toThrow(
      CHECK_INTERACTION_REGEXP,
    );
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

  it('OnDelete не вызывается при нажатии на иконку удаления, если disabled=true', async () => {
    const onDeleteSpy = vi.fn();
    const deleteIconTestId = 'deleteIconTestId';

    const deleteIcon = <span data-testid={deleteIconTestId} />;

    renderWithTheme(
      <Tag disabled onDelete={onDeleteSpy} deleteIcon={deleteIcon} />,
    );

    const deleteIconElement = screen.getByTestId(deleteIconTestId);

    await expect(() => userEvents.click(deleteIconElement)).rejects.toThrow(
      CHECK_INTERACTION_REGEXP,
    );
  });
});
