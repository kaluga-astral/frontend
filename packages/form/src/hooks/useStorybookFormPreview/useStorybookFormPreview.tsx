import { Button, Grid } from '@astral/ui/src';
import { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStorybookFormPreview = (defaultValues: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { control, handleSubmit, reset } = useForm<any>({
    defaultValues,
    mode: 'onBlur',
  });

  const onSubmit = (submitData: unknown) => {
    alert(JSON.stringify(submitData, null, 2));
    reset();
  };

  const Form = ({ children }: PropsWithChildren<{}>) => (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container templateColumns="1fr" rowSpacing={2}>
          <Grid>{children}</Grid>
          <Grid>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );

  return { control, Form };
};
