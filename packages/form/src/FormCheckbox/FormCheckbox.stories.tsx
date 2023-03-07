import { Story } from '@storybook/react';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormCheckbox } from './FormCheckbox';
import { FormCheckboxValue } from './types';

export default {
  title: 'Form/FormCheckbox',
  component: null,
};

type FormValues = {
  fieldName1: FormCheckboxValue;
  fieldName2: FormCheckboxValue;
};

const Template: Story = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      fieldName1: undefined,
      fieldName2: true,
    },
  });

  return (
    <FormStoryContainer form={form}>
      <FormCheckbox
        control={form.control}
        name="fieldName1"
        title="Form checkbox field"
      />
      <FormCheckbox
        control={form.control}
        name="fieldName2"
        title="Form checkbox field"
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
