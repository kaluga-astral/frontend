import { Autocomplete, AutocompleteProps } from '@astral/components';
import { SyntheticEvent } from 'react';

import { WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormAutocompleteProps<
  Option,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
> = WithFormFieldProps<
  AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>
>;

/**
 * @description Адаптер для Select
 */
export const FormAutocomplete = <
  Option,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
>(
  props: FormAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>,
) => {
  const fieldProps = useFormFieldProps(props);

  const handleOnChange = <Value,>(
    _event: SyntheticEvent<Element, Event>,
    value: Value,
  ) => fieldProps.onChange(value);

  return <Autocomplete {...fieldProps} onChange={handleOnChange} />;
};
