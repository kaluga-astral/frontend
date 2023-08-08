import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { MenuItem } from '../MenuItem';
import { OverflowTypography } from '../OverflowTypography';
import { Tag } from '../Tag';
import { Tooltip } from '../Tooltip';

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
    <Autocomplete<IOption, true, false, false>
      multiple
      options={OPTIONS}
      label="Multiple custom tags"
      getOptionLabel={(params) => params.title}
      renderTags={(tags, getTagProps) => {
        return tags.map((tag, index) => {
          const { title } = tag;
          const { onDelete, ...tagProps } = getTagProps({ index });
          const isCustom = index === 0;

          return (
            <Tooltip title={isCustom && 'Custom tag'}>
              <Tag
                {...tagProps}
                onDelete={isCustom ? undefined : onDelete}
                color="warning"
                size="small"
                label={title}
                variant="light"
              />
            </Tooltip>
          );
        });
      }}
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
      required
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
    <Autocomplete<IOption, true, false, false>
      label="Custom render input"
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
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <label>{params.label}</label>
          <input
            type="text"
            ref={params.inputProps.ref}
            value={params.inputProps.value}
            onMouseDown={params.inputProps.onMouseDown}
            placeholder={params.placeholder}
          />
        </div>
      )}
    />
  </Stack>
);
