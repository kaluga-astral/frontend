import { Story } from '@storybook/react';
import { ListItemIcon, Stack } from '@mui/material';
import React from 'react';

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

const Template: Story = (args) => {
  const [singleValue, setSingleValue] = React.useState('');
  const handleSingleChange = (event) => setSingleValue(event.target.value);

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
  const [multipleValue, setMultipleValue] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleMultipleChange = (event) => setMultipleValue(event.target.value);

  const handleSingleChange = (event) => setSingleValue(event.target.value);

  const handleFetchOptions = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const renderMultipleOptions = () => {
    return OPTIONS.map((option) => {
      const checked = multipleValue.includes(option);

      return (
        <MenuItem value={option} key={option}>
          <ListItemIcon>
            <Checkbox checked={checked} />
          </ListItemIcon>
          {option}
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
        loading={loading}
        multiple
      >
        {renderMultipleOptions()}
      </Select>
    </Stack>
  );
};

Showcase.parameters = {
  options: { showPanel: false },
  controls: { expanded: true },
};
