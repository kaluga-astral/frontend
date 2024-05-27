import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';

import { FlowButton } from './FlowButton';

describe('FlowButton', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const ButtonWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <FlowButton targetText="Далее" ref={ref}>
          Выпустить УНЭП
        </FlowButton>
      );
    };

    renderWithTheme(<ButtonWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Кнопка заблокирована, если disabled=true', () => {
    renderWithTheme(
      <FlowButton targetText="Далее" disabled>
        Выпустить УНЭП
      </FlowButton>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('TargetText отображается в кнопке', () => {
    renderWithTheme(<FlowButton targetText="Далее">Выпустить УНЭП</FlowButton>);

    const button = screen.getByRole('button', { name: /Далее/ });

    expect(button).toBeInTheDocument();
  });
});
