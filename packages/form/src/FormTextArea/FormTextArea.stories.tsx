import { type Meta } from '@storybook/react';
import { object, string } from '@astral/validations';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import { FormStoryContainer } from '../docs';
import { FormSubmitButton } from '../FormSubmitButton';
import { useForm } from '../hooks';

import { FormTextArea } from './FormTextArea';
import { type FormTextAreaValue } from './types';

/**
 * Обертка [TextArea](/story/components-textarea--docs) для react-hook-form
 */
const meta: Meta<typeof FormTextArea> = {
  title: 'Form/FormTextarea',
  component: FormTextArea,
};

export default meta;

type FormValues = { textareaField: FormTextAreaValue };

const validationSchema = object<FormValues>({
  textareaField: string(),
});

export const Example = () => {
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
