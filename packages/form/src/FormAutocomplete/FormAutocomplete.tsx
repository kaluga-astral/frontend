import { Autocomplete, type AutocompleteProps } from '@astral/components';
import { type SyntheticEvent, useCallback } from 'react';

import { type WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

type AutocompleteInputChangeReason = 'input' | 'reset' | 'clear';

export type FormAutocompleteProps<
  TFieldValues extends object,
  TOption,
  TMultiple extends boolean,
  TDisableClearable extends boolean,
  TFreeSolo extends boolean,
> = WithFormFieldProps<
  AutocompleteProps<TOption, TMultiple, TDisableClearable, TFreeSolo>,
  TFieldValues
>;

/**
 * Адаптер для Select
 */
export const FormAutocomplete = <
  TFieldValues extends object,
  TOption,
  TMultiple extends boolean,
  TDisableClearable extends boolean,
  TFreeSolo extends boolean,
>(
  props: FormAutocompleteProps<
    TFieldValues,
    TOption,
    TMultiple,
    TDisableClearable,
    TFreeSolo
  >,
) => {
  const fieldProps = useFormFieldProps<
    FormAutocompleteProps<
      TFieldValues,
      TOption,
      TMultiple,
      TDisableClearable,
      TFreeSolo
    >,
    TFieldValues
  >(props);

  const handleOnChange = <TValue,>(
    _event: SyntheticEvent<Element, Event>,
    value: TValue,
  ) => {
    fieldProps.onChange(value);
  };

  const handleOnInputChange = useCallback(
    (
      _event: SyntheticEvent<Element, Event>,
      value: string,
      reason: AutocompleteInputChangeReason,
    ) => {
      //Устанавливаем значение в форму если триггером изменения инпута был пользовательский ввод
      if (fieldProps.freeSolo && reason === 'input') {
        fieldProps.onChange(value);
      }

      fieldProps.onInputChange?.(_event, value, reason);
    },
    [fieldProps.freeSolo, fieldProps.onInputChange],
  );

  // Внимание, костыль.
  // React-hook-form в последних версиях стал требовать для всех полей указывать defaultValues. Если defaultValues не указывать, то form.setValue работать не будет.
  // Это breaking changes для наших проектов. Текущее решение прокидывает в input дефолтное значение, которое rhf может получить через ref и обработать так, как мы ожидаем
  // fallbackValue не установится в state формы, это нужно только для ожидаемой работы rhf
  const fallbackValue = (
    fieldProps.multiple ? [] : null
  ) as typeof fieldProps.value;

  return (
    <Autocomplete
      {...fieldProps}
      value={fieldProps.value || fallbackValue}
      onInputChange={handleOnInputChange}
      onChange={handleOnChange}
    />
  );
};
