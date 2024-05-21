import { type StoryFn } from '@storybook/react';
import { mobilePhone, object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormMobilePhoneField } from './FormMobilePhoneField';
import { type FormMobilePhoneFieldValue } from './types';

export default {
  title: 'Form/FormMobilePhoneField',
  component: null,
};

const validationSchema = object<FormValues>({
  phoneField: string(mobilePhone()),
});

type FormValues = { phoneField: FormMobilePhoneFieldValue };

const Template: StoryFn = () => {
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

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
