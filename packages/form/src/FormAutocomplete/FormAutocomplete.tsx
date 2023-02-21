import { Autocomplete, AutocompleteProps } from '@astral/components';
import { SyntheticEvent } from 'react';

import { WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

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
  const fieldProps = useFormFieldProps<
    FormAutocompleteProps<
      FieldValues,
      Option,
      Multiple,
      DisableClearable,
      FreeSolo
    >,
    FieldValues
  >(props);

  const handleOnChange = <Value,>(
    _event: SyntheticEvent<Element, Event>,
    value: Value,
  ) => fieldProps.onChange(value);

  return <Autocomplete {...fieldProps} onChange={handleOnChange} />;
};
