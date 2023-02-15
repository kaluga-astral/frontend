import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { FormControlLabel } from '../FormControlLabel';
import { Typography } from '../Typography';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template: Story = (args) => <Checkbox {...args} />;

export const Showcase: Story = () => (
  <Stack direction="row" gap={4}>
    <Stack gap={4}>
      <Checkbox />
      <Checkbox disabled />
      <Checkbox checked />
      <Checkbox disabled checked />
      <Checkbox indeterminate />
      <Checkbox indeterminate disabled />
    </Stack>
    <Stack gap={4}>
      <FormControlLabel control={<Checkbox />} label="Текст" />
      <FormControlLabel control={<Checkbox />} label="Текст" disabled />
      <FormControlLabel control={<Checkbox checked />} label="Текст" />
      <FormControlLabel control={<Checkbox checked />} label="Текст" disabled />
      <FormControlLabel control={<Checkbox indeterminate />} label="Текст" />
      <FormControlLabel
        control={<Checkbox indeterminate />}
        label="Текст"
        disabled
      />
    </Stack>
    <Stack justifyContent="space-between" gap={4}>
      <Typography variant="ui">Check=False, State=Default</Typography>
      <Typography variant="ui">Check=False, State=Disabled</Typography>
      <Typography variant="ui">Check=True, State=Default</Typography>
      <Typography variant="ui">Check=True, State=Disabled</Typography>
      <Typography variant="ui">Check=True, State=Indeterminate</Typography>
      <Typography variant="ui">
        Check=True, State=Indeterminate_Disabled
      </Typography>
    </Stack>
  </Stack>
);

Showcase.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  indeterminate: false,
  checked: false,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
