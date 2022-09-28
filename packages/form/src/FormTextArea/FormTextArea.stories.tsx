import { Story } from '@storybook/react';

import { FormStoryContainer } from '../docs';
import { SubmitButton } from '../SubmitButton';
import { useForm } from '../hooks';

import { FormTextArea, FormTextAreaValue } from './FormTextArea';

export default {
  title: 'Form/FormTextarea',
  component: null,
};

type FormValues = { textareaField: FormTextAreaValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  return (
    <FormStoryContainer form={form}>
      <FormTextArea
        required
        label="Form textarea field"
        control={form.control}
        name="textareaField"
        rules={{ required: 'Обязательное поле' }}
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
