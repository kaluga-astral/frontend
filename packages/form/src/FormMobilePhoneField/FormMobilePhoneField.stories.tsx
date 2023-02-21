import { Story } from '@storybook/react';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormMobilePhoneField } from './FormMobilePhoneField';
import { FormMobilePhoneFieldValue } from './types';

export default {
  title: 'Form/FormMobilePhoneField',
  component: null,
};

type FormValues = { phoneField: FormMobilePhoneFieldValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  return (
    <FormStoryContainer form={form}>
      <FormMobilePhoneField
        required
        label="Phone mask field"
        control={form.control}
        name="phoneField"
        rules={{ required: 'Обязательное поле' }}
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
