import { renderWithTheme, screen } from '@astral/tests';

import { StepperWizard } from './StepperWizard';

describe('StepperWizard', () => {
  it('Шаги отображаются если переданы в steps', () => {
    renderWithTheme(
      <StepperWizard
        activeStep={0}
        steps={[{ label: 'Step1' }, { label: 'Step2' }]}
      />,
    );

    expect(screen.getByText('Step1')).toBeInTheDocument();
    expect(screen.getByText('Step2')).toBeInTheDocument();
  });

  it('Контент шага отображается если шаг активен', () => {
    renderWithTheme(
      <StepperWizard
        activeStep={1}
        steps={[
          { label: 'Step1', stepContent: 'Контент шага 1' },
          { label: 'Step2', stepContent: 'Контент шага 2' },
        ]}
      />,
    );

    expect(screen.getByText('Контент шага 2')).toBeInTheDocument();
  });

  it('Контент шага не отображается если шаг не активен', () => {
    renderWithTheme(
      <StepperWizard
        activeStep={1}
        steps={[
          { label: 'Step1', stepContent: 'Контент шага 1' },
          { label: 'Step2', stepContent: 'Контент шага 2' },
        ]}
      />,
    );

    expect(screen.queryByText('Контент шага 1')).not.toBeInTheDocument();
  });
});
