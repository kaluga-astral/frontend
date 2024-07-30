import { type Meta } from '@storybook/react';
import { mobilePhone, object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormMobilePhoneField } from './FormMobilePhoneField';
import { type FormMobilePhoneFieldValue } from './types';

const meta: Meta<typeof FormMobilePhoneField> = {
  title: 'Form/FormMobilePhoneField',
  component: FormMobilePhoneField,
};

export default meta;

const validationSchema = object<FormValues>({
  phoneField: string(mobilePhone()),
});

type FormValues = { phoneField: FormMobilePhoneFieldValue };

export const Example = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormMobilePhoneField
        required
        label="Phone mask field"
        control={form.control}
        name="phoneField"
      />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>
  );
};
