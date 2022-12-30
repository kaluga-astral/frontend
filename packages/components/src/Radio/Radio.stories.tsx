import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { FormControlLabel } from '../FormControlLabel';

import { Radio } from './Radio';

export default {
  title: 'Components/RadioButton',
  component: Radio,
};

const Template: Story = (args) => <Radio {...args} />;

export const RadioButton: Story = () => (
  <Stack direction="row" gap={4}>
    <Stack sx={{ maxWidth: 300 }} gap={2}>
      <FormControlLabel
        control={<Radio checked={false} />}
        label="Check=False, State=Default"
      />
      <FormControlLabel
        control={<Radio checked={false} />}
        label="Check=False, State=Hover"
      />
      <FormControlLabel
        control={<Radio checked />}
        label="Check=True, State=Default"
      />
      <FormControlLabel
        control={<Radio checked />}
        label="Check=True, State=Hover"
      />
      <FormControlLabel
        control={<Radio />}
        label="Check=False, State=Disabled"
        disabled
      />
      <FormControlLabel
        control={<Radio checked />}
        label="Check=True, State=Disabled"
        disabled
      />
    </Stack>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <FormControlLabel control={<Radio checked={false} />} label="Текст" />
      <FormControlLabel control={<Radio checked={false} />} label="Текст" />
      <FormControlLabel control={<Radio checked />} label="Текст" />
      <FormControlLabel control={<Radio checked />} label="Текст" />
      <FormControlLabel control={<Radio />} label="Текст" disabled />
      <FormControlLabel control={<Radio checked />} label="Текст" disabled />
    </Stack>
  </Stack>
);

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
