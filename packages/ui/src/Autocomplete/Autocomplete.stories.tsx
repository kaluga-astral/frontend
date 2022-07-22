import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { MenuItem } from '../MenuItem';
import { OverflowTypography } from '../OverflowTypography';

import { Autocomplete } from './Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
};

type IOption = {
  value: string;
  title: string;
};

const OPTIONS: IOption[] = [
  { value: '1', title: 'Value 1' },
  { value: '2', title: 'Value 2' },
  { value: '3', title: 'Value 3' },
  { value: '4', title: 'Value 4' },
  { value: '5', title: 'Value 5' },
  { value: '6', title: 'Value 6' },
  { value: '7', title: 'Value 7' },
  { value: '8', title: 'Value 8' },
  {
    value: '9',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci, aliquam aliquid delectus ipsam laboriosam magni molestias possimus ullam voluptatibus!',
  },
  {
    value: '10',
    title:
      '12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vero?',
  },
];

const Template: Story = (args) => (
  <Autocomplete<IOption, false, false, false>
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
    <Autocomplete<IOption, false, false, false>
      options={OPTIONS}
      label="Single"
      getOptionLabel={(params) => params.title}
    />
    <Autocomplete<IOption, true, false, false>
      options={OPTIONS}
      label="Multiple"
      multiple
      getOptionLabel={(params) => params.title}
    />
    <Autocomplete<IOption, false, false, false>
      label="Error"
      options={OPTIONS}
      helperText="Ошибка"
      getOptionLabel={(params) => params.title}
      error
    />
    <Autocomplete<IOption, false, false, false>
      label="Success"
      options={OPTIONS}
      helperText="Успех"
      getOptionLabel={(params) => params.title}
      success
    />
    <Autocomplete<IOption, false, false, false>
      label="Small"
      size="small"
      options={OPTIONS}
      getOptionLabel={(params) => params.title}
    />
    <Autocomplete<IOption, true, false, false>
      label="No data"
      size="small"
      multiple
      options={[]}
      getOptionLabel={(params) => params.title}
    />
    <Autocomplete<IOption, false, false, false>
      label="Custom render option"
      size="small"
      options={OPTIONS}
      getOptionLabel={(params) => params.title}
      renderOption={(props, option) => (
        <MenuItem {...props} key={props.id}>
          <OverflowTypography rowsCount={2}>
            {`Custom render option - ${option.title}`}
          </OverflowTypography>
        </MenuItem>
      )}
    />
  </Stack>
);
