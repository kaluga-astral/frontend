import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';

import { SearchField } from './SearchField';

describe('SearchField', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const SearchFieldWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <SearchField ref={ref} />;
    };

    renderWithTheme(<SearchFieldWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Value сбрасывается при клике по кнопке сброса значения', async () => {
    renderWithTheme(<SearchField defaultValue="test" />);

    const clearBtn = screen.getByRole('button');

    await userEvents.click(clearBtn);

    const input = screen.queryByRole('textbox');

    expect(input).toHaveAttribute('value', '');
  });

  it('Фокус устанавливается на input при клике по иконке поиска', async () => {
    const { baseElement } = renderWithTheme(
      <SearchField defaultValue="test" />,
    );

    const searchStartAdornment = baseElement.getElementsByTagName('svg')[0];

    await userEvents.click(searchStartAdornment);

    const input = screen.queryByRole('textbox');

    expect(input).toHaveFocus();
  });

  it('Фокус устанавливается на input при клике по кнопке удаления значения', async () => {
    renderWithTheme(<SearchField defaultValue="test" />);

    const clearBtn = screen.getByRole('button');

    await userEvents.click(clearBtn);

    const input = screen.queryByRole('textbox');

    expect(input).toHaveFocus();
  });
});
