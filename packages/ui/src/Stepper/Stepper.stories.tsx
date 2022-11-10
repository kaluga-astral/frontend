import { Story } from '@storybook/react';

import { Grid, Step, StepLabel, Stepper, Typography } from '..';

import { ArrowStepperConnector } from './ArrowStepperConnector';

export default {
  title: 'Components/Stepper',
  component: Step,
};

const Template: Story = () => {
  return (
    <Grid container rowSpacing={10}>
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
      <Grid>
        <Typography paragraph variant="h4">
          Stepper without line
        </Typography>
        <Stepper connector={<ArrowStepperConnector />} activeStep={2}>
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
      <Grid>
        <Typography paragraph variant="h4">
          Stepper with alternativeLabel
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
    </Grid>
  );
};

export const Showcase = Template.bind({});

Showcase.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
