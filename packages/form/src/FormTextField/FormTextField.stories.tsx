import { Story } from '@storybook/react';

import { useForm } from '../hooks';
import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { FormTextField, FormTextFieldValue } from '../FormTextField';

export default {
  title: 'Form/FormTextField',
  component: null,
};

type FormValues = { name: FormTextFieldValue; a: string };

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
        helperText="Это поле отражает всю суть текстовых полей"
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
