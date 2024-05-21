import { type StoryFn } from '@storybook/react';
import { LegacyGrid } from '@astral/components';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { useForm } from '../hooks';
import { FormTextField, type FormTextFieldValue } from '../FormTextField';
import { FormSubmitButton } from '../FormSubmitButton';

import { Form } from './Form';

export default {
  title: 'Form/Form',
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

  const handleSubmit = (values: FormValues) =>
    new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    }).then(() => {
      window.alert(values);
    });

  return (
    <Form noValidate form={form} onSubmit={form.handleSubmit(handleSubmit)}>
      <LegacyGrid container templateColumns="300px" rowSpacing={2}>
        <FormTextField
          required
          label="Form text field"
          control={form.control}
          name="name"
        />
        <FormSubmitButton>Submit</FormSubmitButton>
      </LegacyGrid>
    </Form>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
