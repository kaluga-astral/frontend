import { type Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';
import { Form } from '../Form';

import { FormMaskField } from './FormMaskField';
import { type FormMaskFieldValue } from './types';

/**
 * Обертка [MaskField](/story/components-maskfield--docs) для react-hook-form
 */
const meta: Meta<typeof FormMaskField> = {
  title: 'Form/FormMaskField',
  component: FormMaskField,
};

export default meta;

type FormValues = { maskFieldId: FormMaskFieldValue };

const validationSchema = object<FormValues>({
  maskFieldId: string(),
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
        <FormMaskField
          required
          label="Ввод ID"
          name="maskFieldId"
          mask="aa.0000-000"
          placeholder="aa.0000-000"
          control={form.control}
        />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>
  );
};
