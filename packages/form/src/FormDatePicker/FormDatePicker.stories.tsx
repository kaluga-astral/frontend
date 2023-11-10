import type { Story } from '@storybook/react';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import type { FormDatePickerValue } from './FormDatePicker';
import { FormDatePicker } from './FormDatePicker';

export default {
  title: 'Form/FormDatePicker',
  component: null,
};

type FormValues = { dateField: FormDatePickerValue };

const validationSchema = object<FormValues>({
  dateField: date(),
});

const Template: Story = () => {
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
