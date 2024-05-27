import { type Meta, type StoryObj } from '@storybook/react';
import {
  ListItemIcon,
  ListSubheader,
  type SelectChangeEvent,
  Stack,
} from '@mui/material';
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

const FIX_WIDTH_SELECT = 360;

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
  { value: '4', name: 'Длинное название' },
  { value: '5', name: 'Куда более длинное название' },
  { value: '6', name: 'Реально куда более длинное название, очень большое' },
];

export const Interaction: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [singleValue, setSingleValue] = useState('');
    const handleSingleChange = (event: SelectChangeEvent<unknown>) => {
      setSingleValue(event.target.value as string);
    };

    return (
      <Stack width={FIX_WIDTH_SELECT}>
        <Select onChange={handleSingleChange} value={singleValue} {...args}>
          {OPTIONS.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>
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
      <Stack width={FIX_WIDTH_SELECT}>
        <Select
          label="Basic"
          onChange={handleSingleChange}
          value={singleValue}
          placeholder="Выберите вариант"
          fullWidth
        >
          {OPTIONS.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Stack width={FIX_WIDTH_SELECT}>
        <Select
          label="Disabled"
          onChange={handleSingleChange}
          value={singleValue}
          placeholder="Выберите вариант"
          fullWidth
          disabled
        >
          {OPTIONS.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>
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
        label="Standard"
        onChange={handleSingleChange}
        value={singleValue}
        placeholder="Выберите вариант"
        fullWidth
        disabled
      >
        {OPTIONS.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export const Loading = () => {
  const [singleValue, setSingleValue] = useState('');
  const [loading, setLoading] = React.useState(false);

  const handleFetchOptions = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) => {
    setSingleValue(event.target.value);
  };

  return (
    <>
      <Stack width={FIX_WIDTH_SELECT}>
        <Select
          placeholder="Выберите вариант"
          value={singleValue}
          onChange={handleSingleChange}
          label="Loading"
          onOpen={handleFetchOptions}
          loading={loading}
        >
          {OPTIONS.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </>
  );
};

export const Validation = () => {
  const [singleValue, setSingleValue] = React.useState('');

  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) =>
    setSingleValue(event.target.value);

  return (
    <>
      <Stack width={FIX_WIDTH_SELECT}>
        <Select
          error
          helperText="Ошибка валидации"
          placeholder="Выберите вариант"
          value={singleValue}
          label="Error"
          onChange={handleSingleChange}
        >
          {OPTIONS.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>

      <Stack width={FIX_WIDTH_SELECT}>
        <Select
          success
          helperText="Проверка пройдена"
          placeholder="Выберите вариант"
          value={singleValue}
          label="Success"
          onChange={handleSingleChange}
        >
          {OPTIONS.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Stack>
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
    <Stack width="100%" maxWidth={FIX_WIDTH_SELECT}>
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
    </Stack>
  );
};

export const Grouping = () => {
  const [singleValue, setSingleValue] = React.useState('');

  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) =>
    setSingleValue(event.target.value);

  return (
    <>
      <Stack width={FIX_WIDTH_SELECT}>
        <Select
          placeholder="Выберите вариант"
          value={singleValue}
          label="Grouping"
          onChange={handleSingleChange}
        >
          <ListSubheader>Group 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Group 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </Stack>
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
