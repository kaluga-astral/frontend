import { renderWithTheme, screen } from '@astral/tests';
import { expect } from 'vitest';

import { StepperWizard } from './StepperWizard';

describe('StepperWizard', () => {
  it('Шаги отображаются, если переданы в steps', () => {
    renderWithTheme(
      <StepperWizard
        activeStep={0}
        steps={[{ label: 'Step1' }, { label: 'Step2' }]}
      />,
    );

    expect(screen.getByText('Step1')).toBeVisible();
    expect(screen.getByText('Step2')).toBeVisible();
  });
});
