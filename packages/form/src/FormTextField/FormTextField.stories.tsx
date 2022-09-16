import { Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Button, Grid } from '@astral/ui';

import { FormTextField, FormTextFieldValue } from './FormTextField';

export default {
  title: 'Form/FormTextField',
  component: null,
};

type FormValues = { name: FormTextFieldValue };

const Template: Story = () => {
  const form = useForm<FormValues>();

  const handleSubmit = (values: FormValues) => {
    window.alert(JSON.stringify(values));
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container templateColumns="1fr" rowSpacing={2}>
        <Grid>
          <FormTextField
            label="Form text field"
            control={form.control}
            name="name"
            rules={{ required: 'Обязательное поле' }}
          />
        </Grid>
        <Grid>
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
