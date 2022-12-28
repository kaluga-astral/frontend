import { Story } from '@storybook/react';
import { ListItemIcon, SelectChangeEvent, Stack } from '@mui/material';
import React, { useState } from 'react';

import { MenuItem } from '../MenuItem';
import { Checkbox } from '../Checkbox';

import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

const OPTIONS: string[] = [
  'Value 1',
  'Value 2',
  'Value 3',
  'Value 4',
  'Value 5',
  'Value 6',
  'Value 7',
  'Value 8',
];

const MULTIPLE_OPTIONS: Array<{ value: string; name: string }> = [
  { value: '1', name: 'Валерий 1' },
  { value: '2', name: 'Валерий 2' },
  { value: '3', name: 'Валерий 3' },
  { value: '4', name: 'Валерий 4' },
  { value: '5', name: 'Валерий 5' },
];

const Template: Story = (args) => {
  const [singleValue, setSingleValue] = useState('');
  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) => {
    setSingleValue(event.target.value);
  };

  const renderSingleOptions = () => {
    return OPTIONS.map((option) => (
      <MenuItem value={option} key={option}>
        {option}
      </MenuItem>
    ));
  };

  return (
    <Stack maxWidth={300}>
      <Select
        {...args}
        label="Select"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
      >
        {renderSingleOptions()}
      </Select>
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};

export const Showcase: Story = () => {
  const [singleValue, setSingleValue] = React.useState('');
  const [multipleValue, setMultipleValue] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleMultipleChange = (
    event: SelectChangeEvent<typeof multipleValue>,
  ) => {
    setMultipleValue(event.target.value as string[]);
  };

  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) =>
    setSingleValue(event.target.value);

  const handleFetchOptions = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const renderMultipleOptions = () => {
    return MULTIPLE_OPTIONS.map(({ value, name }) => {
      const checked = multipleValue.includes(value);

      return (
        <MenuItem value={value} key={value}>
          <ListItemIcon>
            <Checkbox checked={checked} />
          </ListItemIcon>
          {name}
        </MenuItem>
      );
    });
  };

  const renderSingleOptions = () => {
    return OPTIONS.map((option) => (
      <MenuItem value={option} key={option}>
        {option}
      </MenuItem>
    ));
  };

  const getOptionLabel = (value: string | number) => {
    const optionLabel = MULTIPLE_OPTIONS.find(
      (option) => option.value === value,
    );

    return optionLabel?.name || value;
  };

  return (
    <Stack maxWidth={300} gap={2}>
      <Select
        placeholder="Выберите вариант"
        value={singleValue}
        label="Single"
        onChange={handleSingleChange}
      >
        {renderSingleOptions()}
      </Select>
      <Select
        error
        helperText="Ошибка валидации"
        placeholder="Выберите вариант"
        value={singleValue}
        label="Error"
        onChange={handleSingleChange}
      >
        {renderSingleOptions()}
      </Select>
      <Select
        success
        helperText="Проверка пройдена"
        placeholder="Выберите вариант"
        value={singleValue}
        label="Success"
        onChange={handleSingleChange}
      >
        {renderSingleOptions()}
      </Select>
      <Select
        placeholder="Выберите вариант"
        value={multipleValue}
        label="Multiple"
        onChange={handleMultipleChange}
        getOptionLabel={getOptionLabel}
        multiple
      >
        {renderMultipleOptions()}
      </Select>
      <Select
        placeholder="Выберите вариант"
        value={multipleValue}
        label="Loading"
        onChange={handleMultipleChange}
        onOpen={handleFetchOptions}
        getOptionLabel={getOptionLabel}
        loading={loading}
        multiple
      >
        {renderMultipleOptions()}
      </Select>
      <Select placeholder="Выберите вариант" label="No data" />
    </Stack>
  );
};

Showcase.parameters = {
  options: { showPanel: false },
  controls: { expanded: true },
};
