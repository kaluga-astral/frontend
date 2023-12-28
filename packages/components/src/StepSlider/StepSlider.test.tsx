import { describe, expect, it } from 'vitest';
import { useState } from 'react';
import { act, renderWithTheme, screen } from '@astral/tests';

import { StepSlider } from './StepSlider';

describe('StepSlider', () => {
  it('Компонент отображается, если активен его id', async () => {
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

    expect(screen.getByText('lorem 2')).toBeVisible();
  });
});
