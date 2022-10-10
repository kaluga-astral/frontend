import { Story } from '@storybook/react';

import { FormStoryContainer } from '../docs';
import { SubmitButton } from '../SubmitButton';
import { useForm } from '../hooks';

import { FormMaskField, FormMaskFieldValue } from './FormMaskField';

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
      <SubmitButton>Submit</SubmitButton>
    </FormStoryContainer>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
