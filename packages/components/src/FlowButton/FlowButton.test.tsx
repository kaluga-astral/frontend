import { renderWithTheme, screen } from '@astral/tests';
import { describe, expect, it } from 'vitest';
import { useEffect, useRef } from 'react';

import { FlowButton } from './FlowButton';

describe('FlowButton', () => {
  it('Prop:ref: is present', () => {
    const resultRef = { current: null };

    const ButtonWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <FlowButton smallText="Далее" ref={ref}>
          Выпустить УНЭП
        </FlowButton>
      );
    };

    renderWithTheme(<ButtonWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:disabled: блокирует кнопку', () => {
    renderWithTheme(
      <FlowButton smallText="Далее" disabled>
        Выпустить УНЭП
      </FlowButton>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Prop:loading: блокирует кнопку', () => {
    renderWithTheme(
      <FlowButton smallText="Далее" loading>
        Выпустить УНЭП
      </FlowButton>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Prop:loading: отображается лоадер', () => {
    renderWithTheme(
      <FlowButton smallText="Далее" loading>
        Выпустить УНЭП
      </FlowButton>,
    );

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });
});
