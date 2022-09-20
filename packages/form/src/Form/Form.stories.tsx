import { Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Grid } from '@astral/ui';

import { FormTextField, FormTextFieldValue } from '../FormTextField';
import { SubmitButton } from '../SubmitButton';

import { Form } from './Form';

export default {
  title: 'Form/Form',
  component: null,
};

type FormValues = { name: FormTextFieldValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  const handleSubmit = (values: FormValues) =>
    new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    }).then(() => {
      window.alert(values);
    });

  return (
    <Form noValidate form={form} onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container templateColumns="300px" rowSpacing={2}>
        <FormTextField
          required
          label="Form text field"
          control={form.control}
          name="name"
          rules={{ required: 'Обязательное поле' }}
        />
        <SubmitButton>Submit</SubmitButton>
      </Grid>
    </Form>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
