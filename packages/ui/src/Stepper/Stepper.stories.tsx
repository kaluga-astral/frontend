import { Story } from '@storybook/react';

import { Grid, Typography } from '..';

import { Step, StepLabel, Stepper } from '.';

export default {
  title: 'Components/Stepper',
  component: Step,
};

const Template: Story = () => {
  return (
    <Grid container rowSpacing={10}>
      <Grid>
        <Typography paragraph variant="h4">
          Stepper without line
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
          Stepper with line
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

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
