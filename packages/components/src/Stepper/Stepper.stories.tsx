import { Meta } from '@storybook/react';
import { useState } from 'react';

import { Grid, Step, StepContent, StepLabel, Stepper, Typography } from '..';
import { Button } from '../Button';
import { styled } from '../styles';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=427-5578&mode=design&t=cAVE2DuNhtiUtoF6-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
};

export default meta;

export const Example = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Stepper default
    </Typography>
    <Stepper activeStep={2}>
      <Step>
        <StepLabel>Completed</StepLabel>
      </Step>
      <Step>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);

export const Connector = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Stepper со стрелочным коннектором
    </Typography>
    <Stepper connector="arrow" activeStep={2}>
      <Step>
        <StepLabel>Completed</StepLabel>
      </Step>
      <Step>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);

export const AlternativeLabel = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Stepper c альтернативным лэйблом
    </Typography>
    <Stepper alternativeLabel activeStep={2}>
      <Step>
        <StepLabel>Completed</StepLabel>
      </Step>
      <Step>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);

export const Orientation = () => (
  <Grid>
    <Typography paragraph variant="h4">
      Вертикальный Stepper(все элементы активны)
    </Typography>
    <Stepper orientation={'vertical'} activeStep={4}>
      <Step active={true}>
        <StepLabel>Completed</StepLabel>
        <StepContent>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur culpa debitis fugit iure obcaecati recusandae
            reprehenderit repudiandae vero? Ad aliquam aspernatur aut debitis
            earum fugit minus numquam officiis quaerat sapiente.
          </Typography>
        </StepContent>
      </Step>
      <Step active={true}>
        <StepLabel error>Error</StepLabel>
      </Step>
      <Step active={true}>
        <StepLabel>Select</StepLabel>
      </Step>
      <Step active={true}>
        <StepLabel>Default</StepLabel>
      </Step>
    </Stepper>
  </Grid>
);

const ButtonsWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(3, 10, 0, 10)};
  display: flex;
  justify-content: space-between;
`;

export const TransitionStepByStep = () => {
  const [activeStep, setActiveStep] = useState(0);

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

  const steps = [
    { label: 'Step 1', isError: false },
    { label: 'Step 2', isError: false },
    { label: 'Step 3', isError: true },
    { label: 'Step 4', isError: false },
  ];

  return (
    <Grid>
      <Typography paragraph variant="h4">
        Stepper c переключением шагов(все шаги завершены)
      </Typography>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((item, index) => (
          <Step key={index} completed={true}>
            <StepLabel isSelected={activeStep === index} error={item.isError}>
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
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
