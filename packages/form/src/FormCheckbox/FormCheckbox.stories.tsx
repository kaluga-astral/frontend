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

type FormValues = { fieldName: FormCheckboxValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  return (
    <FormStoryContainer form={form}>
      <FormCheckbox
        control={form.control}
        name="fieldName"
        title="Form checkbox field"
        rules={{ required: 'Обязательное поле' }}
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
