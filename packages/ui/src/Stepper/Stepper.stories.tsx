import { Story } from '@storybook/react';
import { NextOutlineMd } from '@astral/icons';

import { Grid, Step, StepLabel, Stepper, Typography, styled } from '..';

export default {
  title: 'Components/Stepper',
  component: Step,
};

const NextStepConnector = styled(NextOutlineMd)`
  color: ${({ theme }) => theme.palette.grey[400]};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
`;

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
        <Stepper connector={<NextStepConnector />} activeStep={2}>
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
