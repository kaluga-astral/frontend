import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Grid } from '../Grid';
import { styled } from '../styles';

import { StepperWizard } from './StepperWizard';
import { type Steps } from './types';

/**
 * StepperWizard - фасад для работы с базовыми компонентами Stepper
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=427-5578&mode=design&t=cAVE2DuNhtiUtoF6-0)
 * ### [Guide]()
 */
const meta: Meta<typeof StepperWizard> = {
  title: 'Components/StepperWizard',
  component: StepperWizard,
};

export default meta;

type Story = StoryObj<typeof StepperWizard>;

export const Interaction: Story = {
  args: {
    steps: [
      { label: 'Step 1', isError: false, stepContent: 'Описание для шага 1' },
      { label: 'Step 2', isError: false, stepContent: 'Описание для шага 2' },
      { label: 'Step 3', isError: false, stepContent: 'Описание для шага 3' },
    ],
    activeStep: 1,
    orientation: 'vertical',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing(3, 10, 0, 10)};
`;

export const Example = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Steps = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ];

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Grid>
      <StepperWizard activeStep={activeStep} steps={steps} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          BACK
        </Button>
        <Button variant="link" onClick={handleNext}>
          NEXT
        </Button>
      </ButtonsWrapper>
    </Grid>
  );
};

export const Error = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Steps = [
    { label: 'Step 1' },
    { label: 'Step 2', isError: true },
    { label: 'Step 3' },
    { label: 'Step 4', isError: true },
  ];

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Grid>
      <StepperWizard activeStep={activeStep} steps={steps} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          BACK
        </Button>
        <Button variant="link" onClick={handleNext}>
          NEXT
        </Button>
      </ButtonsWrapper>
    </Grid>
  );
};

export const ConnectorArrow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Steps = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
  ];

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Grid>
      <StepperWizard connector="arrow" activeStep={activeStep} steps={steps} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          BACK
        </Button>
        <Button variant="link" onClick={handleNext}>
          NEXT
        </Button>
      </ButtonsWrapper>
    </Grid>
  );
};

export const AlternativeLabel = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Steps = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
  ];

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Grid>
      <StepperWizard alternativeLabel activeStep={activeStep} steps={steps} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          BACK
        </Button>
        <Button variant="link" onClick={handleNext}>
          NEXT
        </Button>
      </ButtonsWrapper>
    </Grid>
  );
};

export const StepContent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Steps = [
    { label: 'Step 1', stepContent: 'Описание для шага 1' },
    { label: 'Step 2', stepContent: 'Описание для шага 2' },
    { label: 'Step 3', stepContent: 'Описание для шага 3' },
  ];

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Grid>
      <StepperWizard
        orientation="vertical"
        activeStep={activeStep}
        steps={steps}
      />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          BACK
        </Button>
        <Button variant="link" onClick={handleNext}>
          NEXT
        </Button>
      </ButtonsWrapper>
    </Grid>
  );
};
