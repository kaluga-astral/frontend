import { Autocomplete, AutocompleteProps } from '@astral/ui';
import { useController } from 'react-hook-form';
import { SyntheticEvent } from 'react';

import { WithFormFieldProps } from '../types';
import { useFieldErrorProps, useInputProps } from '../hooks';

export type FormAutocompleteProps<
  FieldValues extends object,
  Option,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
> = WithFormFieldProps<
  AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>,
  FieldValues
>;

/**
 * @description Адаптер для Select
 */
export const FormAutocomplete = <
  FieldValues extends object,
  Option,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
>(
  props: FormAutocompleteProps<
    FieldValues,
    Option,
    Multiple,
    DisableClearable,
    FreeSolo
  >,
) => {
  const inputProps = useInputProps(props);
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  const handleOnChange = <Value,>(
    _event: SyntheticEvent<Element, Event>,
    value: Value,
  ) => field.onChange(value);

  return (
    <Autocomplete
      {...field}
      {...inputProps}
      {...errorProps}
      onChange={handleOnChange}
    />
  );
};
