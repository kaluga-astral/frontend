import { Meta } from '@storybook/react';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';
import { Form } from '../Form';

import {
  FormDateRangePicker,
  FormDateRangePickerValue,
} from './FormDateRangePicker';

const meta: Meta<typeof FormDateRangePicker> = {
  title: 'Form/FormDateRangePicker',
  component: FormDateRangePicker,
};

export default meta;

type FormValues = {
  startDateField: FormDateRangePickerValue;
  endDateField: FormDateRangePickerValue;
};

const validationSchema = object<FormValues>({
  startDateField: date(),
  endDateField: date(),
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
        <FormDateRangePicker
          startDateProps={{
            name: 'startDateField',
            control: form.control,
            inputProps: {
              label: 'startDate',
            },
          }}
          endDateProps={{
            name: 'endDateField',
            control: form.control,
            inputProps: {
              label: 'endDate',
            },
          }}
        />
        <FormSubmitButton>Submit</FormSubmitButton>
      </Grid>
    </Form>
  );
};

/**
 * Prop `size` управляет размером компонента.
 * По-дефолту 'medium'.
 */
export const Size = () => {
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
        <FormDateRangePicker
          size={'small'}
          startDateProps={{
            name: 'startDateField',
            control: form.control,
            inputProps: {
              label: 'startDate',
            },
          }}
          endDateProps={{
            name: 'endDateField',
            control: form.control,
            inputProps: {
              label: 'endDate',
            },
          }}
        />
        <FormSubmitButton>Submit</FormSubmitButton>
      </Grid>
    </Form>
  );
};
