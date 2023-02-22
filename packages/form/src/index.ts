export {
  useWatch as useFormWatch,
  UseWatchProps as UseFormWatchProps,
  useController as useFormController,
  ControllerProps as FormControllerProps,
  UseControllerProps as UseFormControllerProps,
  FieldValues as FormFieldValues,
  Controller as FormController,
  useFieldArray as useFormFieldArray,
  FieldArrayWithId as FormFieldArrayWithId,
  FieldArray as FormFieldArray,
  Field as FormField,
  FieldError as FormFieldError,
  FieldErrors as FormFieldErrors,
  FieldPath as FormFieldPath,
  Path as FormPath,
  UseFormGetValues,
  FieldArrayPath as FormFieldArrayPath,
  Resolver as FormResolver,
  RegisterOptions as FormRegisterOptions,
} from 'react-hook-form';

export * from './FormAutocomplete';

export * from './FormMaskField';

export * from './FormMobilePhoneField';

export * from './FormTextArea';

export * from './FormCheckbox';

export * from './FormSelect';

export * from './FormTextField';

export * from './FormSubmitButton';

export * from './FormDatePicker';

export * from './Form';

export * from './types';

// нельзя экспортить через * потому, что есть пересечение с export * from 'react-hook-form';
export {
  useForm,
  type UseFormProps,
  type UseFormReturn,
  useFormContext,
  useFormFieldErrorProps,
  useFormFieldProps,
} from './hooks';

export { FormProvider } from './FormProvider';
