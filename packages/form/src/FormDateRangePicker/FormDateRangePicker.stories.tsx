import { Meta } from '@storybook/react';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid } from '@astral/components';

import { styled } from '../../../components/src/styles';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';
import { Form } from '../Form';

import {
  FormDateRangePicker,
  FormDateRangePickerValue,
} from './FormDateRangePicker';

/**
 * Обертка [DateRangePicker](/story/components-datepickers-daterangepicker--docs) для react-hook-form
 */
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

const ExampleWrapper = styled.div`
  height: 350px;
`;

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
    <ExampleWrapper>
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
    </ExampleWrapper>
  );
};
