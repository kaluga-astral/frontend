import { FieldValues } from 'react-hook-form';

/**
 * @description хук предназначен для предоставления пропсов input без пропсов rhf.
 */
export const useInputProps = <FieldProps extends FieldValues>(
  props: FieldProps,
) => {
  const { control, defaultValue, rules, shouldUnregister, ...inputProps } =
    props;

  return inputProps;
};
