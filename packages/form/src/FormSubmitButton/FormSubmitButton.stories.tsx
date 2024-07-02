import { type StoryFn } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { useForm } from '../hooks';
import { FormTextField, type FormTextFieldValue } from '../FormTextField';
import { FormStoryContainer } from '../docs';

import { FormSubmitButton } from './';

export default {
  title: 'Form/FormSubmitButton',
  component: null,
};

type FormValues = { name: FormTextFieldValue };

const validationSchema = object<FormValues>({
  name: string(),
});

const Template: StoryFn = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormTextField
        required
        label="Form text field"
        control={form.control}
        name="name"
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
