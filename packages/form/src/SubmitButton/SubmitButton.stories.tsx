import { Story } from '@storybook/react';

import { useForm } from '../hooks';
import { FormTextField, FormTextFieldValue } from '../FormTextField';
import { SubmitButton } from '../SubmitButton';
import { FormStoryContainer } from '../docs';

export default {
  title: 'Form/SubmitButton',
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
      <SubmitButton>Submit</SubmitButton>
    </FormStoryContainer>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
