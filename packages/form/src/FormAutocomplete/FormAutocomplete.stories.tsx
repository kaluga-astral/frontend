import { Story } from '@storybook/react';

import { useForm } from '../hooks';
import { FormStoryContainer } from '../docs';
import { SubmitButton } from '../SubmitButton';

import { FormAutocomplete } from './FormAutocomplete';

export default {
  title: 'Form/FormAutocomplete',
  component: null,
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

type FormValues = {
  autocomplete: IOption[];
};

const Template: Story = () => {
  const form = useForm<FormValues>({
    defaultValues: { autocomplete: [OPTIONS[0]] },
  });

  return (
    <FormStoryContainer form={form}>
      <FormAutocomplete<FormValues, IOption, true, false, false>
        multiple
        control={form.control}
        name="autocomplete"
        options={OPTIONS}
        label="Form autocomplete"
        getOptionLabel={(params) => params.title}
        rules={{ required: 'Обязательное поле' }}
      />
      <SubmitButton>Submit</SubmitButton>
    </FormStoryContainer>
  );
};

export const Default = Template.bind({});

Default.args = {};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
