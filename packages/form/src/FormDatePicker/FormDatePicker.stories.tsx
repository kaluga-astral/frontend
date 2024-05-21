import { type StoryFn } from '@storybook/react';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormDatePicker, type FormDatePickerValue } from './FormDatePicker';

export default {
  title: 'Form/FormDatePicker',
  component: null,
};

type FormValues = { dateField: FormDatePickerValue };

const validationSchema = object<FormValues>({
  dateField: date(),
});

const Template: StoryFn = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormDatePicker
        inputProps={{ label: 'FormDatePicker', required: true }}
        control={form.control}
        name="dateField"
      />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
