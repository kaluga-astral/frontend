import { Story } from '@storybook/react';

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

const Template: Story = () => {
  const form = useForm<FormValues>();

  return (
    <FormStoryContainer form={form}>
      <FormMaskField
        required
        label="Form mask field"
        control={form.control}
        name="maskField"
        rules={{ required: 'Обязательное поле' }}
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
