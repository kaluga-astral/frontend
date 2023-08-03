import { Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { useForm } from '../hooks';
import { Form } from '../Form';
import { FormSubmitButton } from '../FormSubmitButton';

import { FormTextField } from './FormTextField';
import { FormTextFieldValue } from './types';

const meta: Meta<typeof FormTextField> = {
  title: 'Form/FormTextField',
  component: FormTextField,
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

  const handleSubmit = form.handleSubmit(
    (values) =>
      new Promise<void>((resolve) => {
        setTimeout(() => {
          window.alert(JSON.stringify(values));
          resolve();
        }, 1000);
      }),
  );

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <FormTextField
          required
          label="Имя"
          name="name"
          control={form.control}
        />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>
  );
};
