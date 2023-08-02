import { Meta, Story } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { useForm } from '../hooks';
import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { FormTextField, FormTextFieldValue } from '../FormTextField';

const meta: Meta<typeof FormTextField> = {
  title: 'Form/FormTextField',
  component: FormTextField,
};

export default meta;

type FormValues = { name: FormTextFieldValue };

const validationSchema = object<FormValues>({
  name: string(),
});

const Template: Story = () => {
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
