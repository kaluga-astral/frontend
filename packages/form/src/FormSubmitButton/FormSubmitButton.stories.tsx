import { Story } from '@storybook/react';

import { useForm } from '../hooks';
import { FormTextField, FormTextFieldValue } from '../FormTextField';
import { FormSubmitButton } from '../FormSubmitButton';
import { FormStoryContainer } from '../docs';

export default {
  title: 'Form/FormSubmitButton',
  component: null,
};

type FormValues = { name: FormTextFieldValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  return (
    <FormStoryContainer form={form}>
      <FormTextField
        required
        label="Form text field"
        control={form.control}
        name="name"
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
