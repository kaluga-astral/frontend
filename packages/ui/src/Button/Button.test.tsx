import { renderWithTheme, screen } from '@astral/tests';
import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';

import { Button } from './Button';

describe('Button', () => {
  it('Prop:ref: is present', () => {
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

  it('Prop:disabled: блокирует кнопку', () => {
    renderWithTheme(<Button disabled>Btn</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Prop:loading: блокирует кнопку', () => {
    renderWithTheme(<Button loading>Btn</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Prop:loading: отображается лоадер', () => {
    renderWithTheme(<Button loading>Btn</Button>);

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });
});
