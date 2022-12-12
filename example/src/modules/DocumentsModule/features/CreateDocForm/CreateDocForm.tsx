import {
  FormProvider,
  FormTextField,
  FormTextFieldValue,
  isValidINNIP,
  useForm,
  validationService,
} from '@example/shared';

type FormValues = {
  inn: FormTextFieldValue;
};

const VALIDATION_SCHEMA: Record<
  keyof FormValues,
  validationService.BaseSchema
> = {
  inn: isValidINNIP().required(),
};

export const CreateDocForm = () => {
  const form = useForm<FormValues>({ validationSchema: VALIDATION_SCHEMA });

  const handleSubmit = () => {};

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
        <FormTextField required control={form.control} name="inn" />
      </form>
    </FormProvider>
  );
};
