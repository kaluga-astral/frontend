import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Autocomplete } from './';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
};

const OPTIONS = [
  { value: '1', title: 'Value 1' },
  { value: '2', title: 'Value 2' },
  { value: '3', title: 'Value 3' },
  { value: '4', title: 'Value 4' },
  { value: '5', title: 'Value 5' },
  { value: '6', title: 'Value 6' },
  { value: '7', title: 'Value 7' },
  { value: '8', title: 'Value 8' },
];

export const Showcase: Story = () => (
  <Stack>
    <Autocomplete options={OPTIONS} label="Single" />
    <Autocomplete options={OPTIONS} label="Multiple" multiple />
  </Stack>
);
