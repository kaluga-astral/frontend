import { type Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { useForm } from '../hooks';
import { Form } from '../Form';
import { FormSubmitButton } from '../FormSubmitButton';

import { FormEmailField } from './FormEmailField';
import { type FormEmailFieldValue } from './types';

/**
 * Обертка [EmailField](/story/components-emailfield--docs) для react-hook-form
 */
const meta: Meta<typeof FormEmailField> = {
  title: 'Form/FormEmailField',
  component: FormEmailField,
};

export default meta;

type FormValues = { email: FormEmailFieldValue };

const validationSchema = object<FormValues>({
  email: string(),
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
        <FormEmailField
          required
          label="Email"
          name="email"
          control={form.control}
        />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>
  );
};

/**
 * Trim для `<input type="email" />` работает для тэга из коробки.
 * Есть особенности: в submit и state формы всегда будет попадать email без пробелов, но в input пробелы отображаются.
 * Описанное поведение реализовано браузерами и изменить его невозможно.
 */
export const Trim = () => {
  const form = useForm<FormValues>({
    defaultValues: { email: '  email@email.com  ' },
    resolver: resolver<FormValues>(validationSchema),
  });

  const handleSubmit = form.handleSubmit(
    (values) =>
      new Promise<void>((resolve) => {
        window.alert(JSON.stringify(values));
        resolve();
      }),
  );

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <FormEmailField
          required
          label="Email"
          name="email"
          control={form.control}
        />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>
  );
};
