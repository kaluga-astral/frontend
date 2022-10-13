import { Story } from '@storybook/react';
import { Checkbox, ListItemIcon, MenuItem } from '@astral/ui';

import { FormStoryContainer } from '../docs';
import { SubmitButton } from '../SubmitButton';
import { useForm } from '../hooks';

import { FormSelectField } from './FormSelectField';

export default {
  title: 'Form/FormSelectField',
  component: null,
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

const MULTIPLE_OPTIONS: Array<{ value: number; name: string }> = [
  { value: 1, name: 'Валерий 1' },
  { value: 2, name: 'Валерий 2' },
  { value: 3, name: 'Валерий 3' },
  { value: 4, name: 'Валерий 4' },
  { value: 5, name: 'Валерий 5' },
];

type FormValues = {
  single: string;
  multiline: number[];
};

const Template: Story = () => {
  const form = useForm<FormValues>({
    defaultValues: { multiline: [], single: '' },
  });

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

  const renderMultipleOptions = () => {
    return MULTIPLE_OPTIONS.map(({ value, name }) => {
      const checked = form.getValues().multiline.includes(value);

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

  return (
    <FormStoryContainer form={form}>
      <FormSelectField
        control={form.control}
        name="multiline"
        title="Form select field"
        rules={{ required: 'Обязательное поле' }}
        getOptionLabel={getOptionLabel}
        multiple
      >
        {renderMultipleOptions()}
      </FormSelectField>
      <FormSelectField
        control={form.control}
        name="single"
        title="Form select field"
        rules={{ required: 'Обязательное поле' }}
      >
        {renderSingleOptions()}
      </FormSelectField>
      <SubmitButton>Submit</SubmitButton>
    </FormStoryContainer>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
