import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';
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

  it('Tooltip отображается при note и disabled=false', async () => {
    renderWithTheme(<Button note="Кнопка">Btn</Button>);

    const button = screen.getByRole('button');

    await userEvents.hover(button);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Кнопка');
  });

  it('Tooltip отображается при disabledReason и disabled=true', async () => {
    renderWithTheme(
      <Button disabledReason="Заблокировано" disabled>
        Btn
      </Button>,
    );

    const item = screen.getByLabelText('Заблокировано');

    await userEvents.hover(item);

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Заблокировано');
  });
});
