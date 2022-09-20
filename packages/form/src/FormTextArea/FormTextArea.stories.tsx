import { Story } from '@storybook/react';
import { Grid } from '@astral/ui';

import { SubmitButton } from '../SubmitButton';
import { useForm } from '../hooks';

import { FormTextArea, FormTextareaValue } from './FormTextarea';

export default {
  title: 'Form/FormTextarea',
  component: null,
};

type FormValues = { textareaField: FormTextareaValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  const handleSubmit = (values: FormValues) => {
    window.alert(JSON.stringify(values));
  };

  return (
    <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container templateColumns="300px" spacing={2}>
        <FormTextArea
          required
          label="Form textarea field"
          control={form.control}
          name="textareaField"
          rules={{ required: 'Обязательное поле' }}
        />
        <SubmitButton>Submit</SubmitButton>
      </Grid>
    </form>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
