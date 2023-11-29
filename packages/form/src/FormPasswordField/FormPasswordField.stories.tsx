import { type Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { useForm } from '../hooks';
import { Form } from '../Form';
import { FormSubmitButton } from '../FormSubmitButton';

import { FormPasswordField } from './FormPasswordField';
import { type FormPasswordFieldValue } from './types';

/**
 * Обертка [PasswordField](/story/components-passwordfield--docs) для react-hook-form
 */
const meta: Meta<typeof FormPasswordField> = {
  title: 'Form/FormPasswordField',
  component: FormPasswordField,
};

export default meta;

type FormValues = { password: FormPasswordFieldValue };

const validationSchema = object<FormValues>({
  password: string(),
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
        <FormPasswordField
          required
          label="Пароль"
          name="password"
          control={form.control}
        />
        <FormSubmitButton>Сохранить</FormSubmitButton>
      </Grid>
    </Form>
  );
};
