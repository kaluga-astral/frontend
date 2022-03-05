import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Autocomplete } from './Autocomplete';

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

const Template: Story = (args) => (
  <Autocomplete
    {...args}
    options={OPTIONS}
    label="Autocomplete"
    getOptionLabel={(params) => params.title}
  />
);

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};

export const Showcase: Story = () => (
  <Stack maxWidth={300}>
    <Autocomplete
      options={OPTIONS}
      label="Single"
      getOptionLabel={(params) => params.title}
    />
    <Autocomplete
      options={OPTIONS}
      label="Multiple"
      multiple
      getOptionLabel={(params) => params.title}
    />
    <Autocomplete
      label="Error"
      options={OPTIONS}
      helperText="Ошибка"
      getOptionLabel={(params) => params.title}
      error
    />
    <Autocomplete
      label="Success"
      options={OPTIONS}
      helperText="Успех"
      getOptionLabel={(params) => params.title}
      success
    />
    <Autocomplete
      label="Small"
      size="small"
      options={OPTIONS}
      getOptionLabel={(params) => params.title}
    />
    <Autocomplete
      label="No data"
      size="small"
      multiple
      options={[]}
      getOptionLabel={(params) => params.title}
    />
  </Stack>
);
