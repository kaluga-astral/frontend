import { Story } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormMaskField } from './FormMaskField';
import { FormMaskFieldValue } from './types';

export default {
  title: 'Form/FormMaskField',
  component: null,
};

type FormValues = { maskField: FormMaskFieldValue };

const validationSchema = object<FormValues>({
  maskField: string(),
});

const Template: Story = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormMaskField
        required
        label="Form mask field"
        control={form.control}
        name="maskField"
        mask="aa.000"
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
