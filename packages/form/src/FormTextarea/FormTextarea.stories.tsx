import { Story } from '@storybook/react';

import { useStorybookFormPreview } from '../hooks/useStorybookFormPreview';

import { FormTextarea, FormTextareaValue } from './FormTextarea';

export default {
  title: 'Form/FormTextarea',
  component: null,
};

const Template: Story = () => {
  const DEFAULT_VALUES: { textareaField: FormTextareaValue } = {
    textareaField: '',
  };

  const ERROR_TEXT_REQUIRED = 'Обязательное поле';

  const { control, Form } = useStorybookFormPreview(DEFAULT_VALUES);

  return (
    <Form>
      <FormTextarea
        label="Form textarea field"
        control={control}
        name="textareaField"
        rules={{ required: ERROR_TEXT_REQUIRED }}
      />
    </Form>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
