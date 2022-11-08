import { Box } from '@mui/material';
import { Story } from '@storybook/react';

import { Step, StepLabel, Stepper } from '.';

export default {
  title: 'Components/Stepper',
  component: Step,
};

const Template: Story = () => {
  return (
    <Box>
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
    </Box>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
