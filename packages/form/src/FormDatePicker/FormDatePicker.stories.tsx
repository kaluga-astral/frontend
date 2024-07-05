import { type Meta } from '@storybook/react';
import { date, object } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormDatePicker, type FormDatePickerValue } from './FormDatePicker';

/**
 * Обертка [DatePicker](/story/components-datepickers-defaultdatepicker--docs) для react-hook-form
 */
const meta: Meta<typeof FormDatePicker> = {
  title: 'Form/FormDatePicker',
  component: FormDatePicker,
};

export default meta;

type FormValues = { dateField: FormDatePickerValue };

const validationSchema = object<FormValues>({
  dateField: date(),
});

export const Example = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormDatePicker
        inputProps={{ label: 'FormDatePicker', required: true }}
        control={form.control}
        name="dateField"
      />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>
  );
};
