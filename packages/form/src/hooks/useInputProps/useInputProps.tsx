import { FieldValues } from 'react-hook-form';

/**
 * @description хук предназначен для предоставления пропсов input без пропсов rhf.
 */
export const useInputProps = <InputProps extends FieldValues>(
  props: InputProps,
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
