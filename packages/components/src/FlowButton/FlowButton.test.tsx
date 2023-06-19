import { useEffect, useRef } from 'react';
import { renderWithTheme, screen } from '@astral/tests';

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
        <FlowButton targetText="Далее" ref={ref}>
          Выпустить УНЭП
        </FlowButton>
      );
    };

    renderWithTheme(<ButtonWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Prop:disabled: блокирует кнопку', () => {
    renderWithTheme(
      <FlowButton targetText="Далее" disabled>
        Выпустить УНЭП
      </FlowButton>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
