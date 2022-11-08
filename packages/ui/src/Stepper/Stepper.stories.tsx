import { Box } from '@mui/material';
import { Story } from '@storybook/react';

import { Step, Stepper } from '.';

export default {
  title: 'Components/Stepper',
  component: Step,
};

const Template: Story = () => {
  return (
    <Box>
      <Stepper activeStep={2}>
        <Step>Completed</Step>
        <Step error>Error</Step>
        <Step>Select</Step>
        <Step>Default</Step>
      </Stepper>
    </Box>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
