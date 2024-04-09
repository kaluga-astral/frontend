import { useEffect, useRef } from 'react';
import {
  describe,
  expect,
  it,
  renderWithTheme,
  screen,
  vi,
} from '@astral/tests';

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

    const sut = <Tag ref={callbackRefSpy} />;

    renderWithTheme(sut);
    expect(callbackRefSpy).toBeCalledWith(expect.any(HTMLElement));
  });

  it('Rest props перенаправляются в DOM node компонента', () => {
    const sutTestId = 'test-id';
    const testProps = {
      'data-test-prop': 'test-prop',
    };

    const sut = <Tag {...testProps} data-testid={sutTestId} />;

    renderWithTheme(sut);

    const domElement = screen.getByTestId(sutTestId);
    const testProp = domElement.getAttribute('data-test-prop');

    expect(testProp).toBe(testProps['data-test-prop']);
  });

  it('Дополнительный контент отображается, если передан startAddon', () => {
    const label = 'Тег';
    const badgeContent = '12';

    const sut = (
      <Tag
        label={label}
        startAddon={(props) => (
          <TagBadge {...props} badgeContent={badgeContent} />
        )}
      />
    );

    renderWithTheme(sut);

    const badgeElement = screen.getByText(badgeContent);

    expect(badgeElement).toBeVisible();
  });

  it('Дополнительный контент отображается, если передан endAddon', () => {
    const label = 'Тег';
    const badgeContent = '12';

    const sut = (
      <Tag
        label={label}
        endAddon={(props) => (
          <TagBadge {...props} badgeContent={badgeContent} />
        )}
      />
    );

    renderWithTheme(sut);

    const badgeElement = screen.getByText(badgeContent);

    expect(badgeElement).toBeVisible();
  });

  it('Возможно передать кастомную иконку удаления при переданном обработчике onDelete', () => {
    const iconTestId = 'custom-icon';
    const handleDeleteSpy = vi.fn();
    const customIcon = <div data-testid={iconTestId} />;

    const sut = <Tag onDelete={handleDeleteSpy} deleteIcon={customIcon} />;

    renderWithTheme(sut);

    const icon = screen.getByTestId(iconTestId);

    expect(icon).toBeVisible();
  });
});
