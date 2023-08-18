import { Meta } from '@storybook/react';
import { Checkbox, ListItemIcon, MenuItem } from '@astral/components';
import {
  array,
  arrayItem,
  min,
  number,
  object,
  string,
} from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormSelect } from './FormSelect';

const meta: Meta<typeof FormSelect> = {
  title: 'Form/FormSelect',
  component: FormSelect,
};

export default meta;

type IOption = {
  value: number;
  name: string;
};

type FormValues = {
  single: string;
  multiline: number[];
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

const MULTIPLE_OPTIONS: IOption[] = [
  { value: 1, name: 'Валерий 1' },
  { value: 2, name: 'Валерий 2' },
  { value: 3, name: 'Валерий 3' },
  { value: 4, name: 'Валерий 4' },
  { value: 5, name: 'Валерий 5' },
];

const validationSchema = object<FormValues>({
  multiline: array(min(1), arrayItem(number())),
  single: string(),
});

export const Example = () => {
  const form = useForm<FormValues>({
    defaultValues: { multiline: [], single: '' },
    resolver: resolver<FormValues>(validationSchema),
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
      <FormSelect
        control={form.control}
        name="multiline"
        title="Form select field"
        // rules={{ required: 'Обязательное поле' }}
        getOptionLabel={getOptionLabel}
        multiple
      >
        {renderMultipleOptions()}
      </FormSelect>
      <FormSelect
        control={form.control}
        name="single"
        title="Form select field"
        // rules={{ required: 'Обязательное поле' }}
      >
        {renderSingleOptions()}
      </FormSelect>
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>
  );
};
