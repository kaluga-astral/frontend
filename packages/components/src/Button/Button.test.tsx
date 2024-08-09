import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '@astral/tests';
import { useEffect, useRef } from 'react';

import { Button } from './Button';

describe('Button', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const ButtonWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <Button ref={ref}>Btn</Button>;
    };

    renderWithTheme(<ButtonWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Кнопка заблокирована при disabled=true', () => {
    renderWithTheme(<Button disabled>Btn</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Кнопка заблокирована при loading=true', () => {
    renderWithTheme(<Button loading>Btn</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Лоадер отображается при loading=true', () => {
    renderWithTheme(<Button loading>Btn</Button>);

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });
});
