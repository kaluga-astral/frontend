import { type Meta } from '@storybook/react';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { Grid, styled } from '@astral/components';

import { useForm } from '../hooks';
import { FormSubmitButton } from '../FormSubmitButton';
import { Form } from '../Form';

import {
  type FormDateRangePickerValue,
  FormNewDateRangePicker,
} from './FormNewDateRangePicker';

/**
 * Обертка [DateRangePicker](/story/components-datepickers-daterangepicker--docs) для react-hook-form
 */
const meta: Meta<typeof FormNewDateRangePicker> = {
  title: 'Form/FormNewDateRangePicker',
  component: FormNewDateRangePicker,
};

export default meta;

type FormValues = {
  dateField: FormDateRangePickerValue;
};

const validationSchema = object<FormValues>({
  dateField: object({
    from: date(),
    to: date(),
  }),
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
          <FormNewDateRangePicker
            name="dateField"
            startDateProps={{
              inputProps: {
                label: 'Дата начала',
                required: true,
              },
            }}
            endDateProps={{
              inputProps: {
                label: 'Дата окончания',
                required: true,
              },
            }}
            control={form.control}
          />
          <FormSubmitButton>Submit</FormSubmitButton>
        </Grid>
      </Form>
    </ExampleWrapper>
  );
};
