import { Story } from '@storybook/react';

import { FormStoryContainer } from '../docs';
import { SubmitButton } from '../SubmitButton';
import { useForm } from '../hooks';

import { FormDatePicker, FormDatePickerValue } from './FormDatePicker';

export default {
  title: 'Form/FormDatePicker',
  component: null,
};

type FormValues = { dateField: FormDatePickerValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  return (
    <FormStoryContainer form={form}>
      <FormDatePicker
        inputProps={{ label: 'FormDatePicker', required: true }}
        control={form.control}
        name="dateField"
        rules={{ required: 'Обязательное поле' }}
      />
      <SubmitButton>Submit</SubmitButton>
    </FormStoryContainer>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
