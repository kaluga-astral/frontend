import { type Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { useForm } from '../hooks';
import { FormTextField, type FormTextFieldValue } from '../FormTextField';
import { FormStoryContainer } from '../docs';

import { FormSubmitButton } from './';

const meta: Meta<typeof FormSubmitButton> = {
  title: 'Form/FormSubmitButton',
  component: FormSubmitButton,
};

export default meta;

type FormValues = { name: FormTextFieldValue };

const validationSchema = object<FormValues>({
  name: string(),
});

export const Example = () => {
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
