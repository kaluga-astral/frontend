import { Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { useForm } from '../hooks';
import { Form } from '../Form';
import { FormSubmitButton } from '../FormSubmitButton';

import { FormCodeField } from './FormCodeField';
import { FormCodeFieldValue } from './types';

/**
 * Обертка [CodeField](/story/components-codefield--docs) для react-hook-form
 */
const meta: Meta<typeof FormCodeField> = {
  title: 'Form/FormCodeField',
  component: FormCodeField,
};

export default meta;

type FormValues = { code: FormCodeFieldValue };

const validationSchema = object<FormValues>({
  code: string(),
});

export const Example = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
    defaultValues: { code: '123456' },
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
        <FormCodeField codeLength={6} name="code" control={form.control} />
        <FormSubmitButton>Сохранить</FormSubmitButton>
      </Grid>
    </Form>
  );
};
