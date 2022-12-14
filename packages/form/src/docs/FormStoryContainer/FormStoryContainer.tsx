import { Grid } from '@astral/components';

import { Form, FormProps } from '../../Form';

// eslint-disable-next-line
export type FormStoryContainerProps = FormProps<any>;

export const FormStoryContainer = ({
  children,
  onSubmit,
  ...props
}: FormStoryContainerProps) => {
  const { form } = props;

  const handleSubmit = (values: Record<string, unknown>) =>
    new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1200);
    }).then(() => {
      window.alert(JSON.stringify(values));
    });

  return (
    <Form {...props} onSubmit={form.handleSubmit(onSubmit || handleSubmit)}>
      <Grid container templateColumns="300px" spacing={2}>
        {children}
      </Grid>
    </Form>
  );
};
