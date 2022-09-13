import { Story } from '@storybook/react';

import { useStorybookFormPreview } from '../hooks/useStorybookFormPreview';

import { FormTextFiled } from './FormTextFiled';

export default {
  title: 'Form/FormTextFiled',
  component: null,
};

const Template: Story = () => {
  const DEFAULT_VALUES = {
    textField: '',
  };

  const ERROR_TEXT_REQUIRED = 'Обязательное поле';

  const { control, Form } = useStorybookFormPreview(DEFAULT_VALUES);

  return (
    <Form>
      <FormTextFiled
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
