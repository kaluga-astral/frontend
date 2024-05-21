import { type StoryFn } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormTextArea } from './FormTextArea';
import { type FormTextAreaValue } from './types';

export default {
  title: 'Form/FormTextarea',
  component: null,
};

type FormValues = { textareaField: FormTextAreaValue };

const validationSchema = object<FormValues>({
  textareaField: string(),
});

const Template: StoryFn = () => {
  const form = useForm<FormValues>({
    resolver: resolver<FormValues>(validationSchema),
  });

  return (
    <FormStoryContainer form={form}>
      <FormTextArea
        required
        label="Form textarea field"
        control={form.control}
        name="textareaField"
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
