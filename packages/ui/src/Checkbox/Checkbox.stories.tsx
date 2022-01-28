import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import FormControlLabel from '../FormControlLabel';

import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template: Story = (args) => <Checkbox {...args} />;

export const Showcase: Story = () => (
  <Stack direction="row" gap={4}>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <Checkbox />
      <Checkbox disabled />
      <Checkbox checked />
      <Checkbox disabled checked />
      <Checkbox indeterminate />
      <Checkbox indeterminate disabled />
    </Stack>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
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
