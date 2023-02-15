import { Autocomplete, AutocompleteProps } from '../../external';
import {
  WithFormFieldProps,
  useFormFieldErrorProps,
  useFormController,
} from '../external';

export type FormAutocompleteProps<
  Option,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false,
> = WithFormFieldProps<
  AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>,
  // eslint-disable-next-line
  any
>;

/**
 * @description Autocomplete для формы
 */
export function FormAutocomplete<
  Option,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false,
>(props: FormAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>) {
  const { field, fieldState } = useFormController(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  // eslint-disable-next-line
  const handleChange: any = (_: any, value: Option | Option[]) => {
    field.onChange(value);
  };

  return (
    <Autocomplete
      {...field}
      {...props}
      {...errorProps}
      onChange={handleChange}
    />
  );
}
