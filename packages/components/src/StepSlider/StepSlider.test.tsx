import { describe, expect, it } from 'vitest';
import { useState } from 'react';
import { act, renderWithTheme, screen } from '@astral/tests';

import { StepSlider } from './StepSlider';

describe('StepSlider', () => {
  it('activeStep: активируется компонент соответствующий активному шагу', async () => {
    const callbacks: { setValue: (value: number) => void } = {
      setValue: () => undefined,
    };

    const TestComponent = () => {
      const [step, setStep] = useState(1);

      callbacks.setValue = setStep;

      return (
        <StepSlider
          activeStep={step}
          steps={[
            {
              id: 1,
              component: <div>lorem 1</div>,
            },
            {
              id: 2,
              component: <div>lorem 2</div>,
            },
          ]}
        />
      );
    };

    renderWithTheme(<TestComponent />);

    await act(() => {
      callbacks.setValue(2);
    });

    const itemAfter = screen.getByText('lorem 2');

    expect(
      itemAfter,
      'ожидается, что элемент появится только после принудительной активации шага',
    ).toBeTruthy();
  });
});
