import { Story } from '@storybook/react';

import { useStorybookFormPreview } from '../hooks/useStorybookFormPreview';

import { FormTextField } from './FormTextField';

export default {
  title: 'Form/FormTextField',
  component: null,
};

const Template: Story = () => {
  const DEFAULT_VALUES = {
    textField: '',
  };

  const ERROR_TEXT_REQUIRED = 'Обязательное поле';

  const { control, Form } = useStorybookFormPreview(DEFAULT_VALUES);

  return (
    <Form >
      <FormTextField
        label="Form text field"
        control={control}
        name="textField"
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
