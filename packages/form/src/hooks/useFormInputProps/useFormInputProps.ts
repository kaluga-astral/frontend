import { FieldValues } from 'react-hook-form';

/**
 * @description хук предназначен для предоставления пропсов input без пропсов rhf.
 */
export const useFormInputProps = <FormFieldProps extends FieldValues>(
  props: FormFieldProps,
) => {
  const {
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
    ...inputProps
  } = props;

  return inputProps;
};
