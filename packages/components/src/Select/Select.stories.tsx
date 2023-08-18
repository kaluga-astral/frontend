import { Meta, StoryObj } from '@storybook/react';
import { ListItemIcon, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

import { MenuItem } from '../MenuItem';
import { Checkbox } from '../Checkbox';

import { Select } from './Select';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=8756%3A125130)
 * ### [Guide]()
 */
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

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

const renderSingleOptions = () => {
  return OPTIONS.map((option) => (
    <MenuItem value={option} key={option}>
      {option}
    </MenuItem>
  ));
};

export const Interaction: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [singleValue, setSingleValue] = useState('');
    const handleSingleChange = (
      event: SelectChangeEvent<typeof singleValue>,
    ) => {
      setSingleValue(event.target.value);
    };

    return (
      // @ts-ignore
      <Select onChange={handleSingleChange} value={singleValue} {...args}>
        {renderSingleOptions()}
      </Select>
    );
  },
  args: {
    label: 'Select',
    placeholder: 'Выберите вариант',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [singleValue, setSingleValue] = useState('');
  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) => {
    setSingleValue(event.target.value);
  };

  return (
    <>
      <Select
        label="Basic"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
      >
        {renderSingleOptions()}
      </Select>

      <Select
        label="Disabled"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        disabled
      >
        {renderSingleOptions()}
      </Select>
    </>
  );
};

export const Variants = () => {
  const [singleValue, setSingleValue] = useState('');
  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) => {
    setSingleValue(event.target.value);
  };

  return (
    <>
      <Select
        label="Standart"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        variant="standard"
      >
        {renderSingleOptions()}
      </Select>

      <Select
        label="Outlined"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        variant="outlined"
      >
        {renderSingleOptions()}
      </Select>

      <Select
        label="Filled"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        variant="filled"
      >
        {renderSingleOptions()}
      </Select>
    </>
  );
};

export const Disabled = () => {
  const [singleValue, setSingleValue] = useState('');
  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) => {
    setSingleValue(event.target.value);
  };

  return (
    <>
      <Select
        label="Standart"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        variant="standard"
        disabled
      >
        {renderSingleOptions()}
      </Select>

      <Select
        label="Outlined"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        variant="outlined"
        disabled
      >
        {renderSingleOptions()}
      </Select>

      <Select
        label="Filled"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        variant="filled"
        disabled
      >
        {renderSingleOptions()}
      </Select>
    </>
  );
};

export const Loading = () => {
  const [multipleValue] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleFetchOptions = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const getOptionLabel = (value: string | number) => {
    const optionLabel = MULTIPLE_OPTIONS.find(
      (option) => option.value === value,
    );

    return optionLabel?.name || value;
  };

  return (
    <>
      <Select
        placeholder="Выберите вариант"
        value={multipleValue}
        label="Loading"
        onOpen={handleFetchOptions}
        getOptionLabel={getOptionLabel}
        loading={loading}
        multiple
      >
        {renderSingleOptions()}
      </Select>
    </>
  );
};

export const Validation = () => {
  const [singleValue, setSingleValue] = React.useState('');

  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) =>
    setSingleValue(event.target.value);

  return (
    <>
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
    </>
  );
};

export const Multiple = () => {
  const [multipleValue, setMultipleValue] = React.useState<string[]>([]);

  const handleMultipleChange = (
    event: SelectChangeEvent<typeof multipleValue>,
  ) => {
    setMultipleValue(event.target.value as string[]);
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

  const getOptionLabel = (value: string | number) => {
    const optionLabel = MULTIPLE_OPTIONS.find(
      (option) => option.value === value,
    );

    return optionLabel?.name || value;
  };

  return (
    <>
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
    </>
  );
};

export const NoData = () => {
  const [singleValue, setSingleValue] = useState('');
  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) => {
    setSingleValue(event.target.value);
  };

  return (
    <>
      <Select
        label="No data"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
      >
        {[]}
      </Select>
    </>
  );
};
