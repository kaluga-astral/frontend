import {
  type AutocompleteRenderGetTagProps,
  type AutocompleteRenderInputParams,
  type AutocompleteRenderOptionState,
  ListItemIcon,
  Autocomplete as MuiAutocomplete,
  type AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material';
import { forwardRef, useCallback } from 'react';
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react';
import { ChevronDOutlineMd, CrossSmOutlineSm } from '@astral/icons';

import { TextField, type TextFieldProps } from '../TextField';
import { Tag } from '../Tag';
import { MenuItem } from '../MenuItem';
import { Checkbox } from '../Checkbox';
import {
  OverflowTypography,
  type OverflowedElementProps,
} from '../OverflowTypography';
import { type WithoutEmotionSpecific } from '../types';

import { DEFAULT_AUTOCOMPLETE_ELEMENT_ROWS_COUNT } from './constants';
import { type AutocompleteSizes } from './enums';

export type { AutocompleteRenderGetTagProps } from '@mui/material';

export type AutocompleteSize = `${AutocompleteSizes}`;

export type AutocompleteProps<
  AutocompleteValueProps,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
> = Omit<
  WithoutEmotionSpecific<
    MuiAutocompleteProps<
      AutocompleteValueProps,
      Multiple,
      DisableClearable,
      FreeSolo
    >
  >,
  'size' | 'renderInput'
> &
  Pick<
    TextFieldProps,
    'error' | 'success' | 'helperText' | 'label' | 'required' | 'inputRef'
  > & {
    renderInput?: (
      props: TextFieldProps & Omit<AutocompleteRenderInputParams, 'size'>,
    ) => ReactNode;
    size?: AutocompleteSize;
    overflowOption?: OverflowedElementProps;
  };

const AutocompleteInner = <
  AutocompleteValueProps,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
>(
  {
    multiple,
    placeholder,
    error,
    success,
    helperText,
    label,
    getOptionLabel,
    required,
    renderOption: externalRenderOption,
    isOptionEqualToValue: externalOptionEqualToValue,
    noOptionsText = 'Нет данных',
    closeText = 'Закрыть',
    openText = 'Открыть',
    clearText = 'Очистить',
    size = 'medium',
    overflowOption,
    inputRef,
    renderTags,
    renderInput: ExternalRenderInput,
    ...restProps
  }: AutocompleteProps<
    AutocompleteValueProps,
    Multiple,
    DisableClearable,
    FreeSolo
  >,
  ref?: ForwardedRef<unknown>,
) => {
  const renderDefaultTags = useCallback(
    (
      tags: AutocompleteValueProps[],
      getTagProps: AutocompleteRenderGetTagProps,
    ) => {
      return tags.map((tag: AutocompleteValueProps, index: number) => {
        const title = (getOptionLabel && getOptionLabel(tag)) || '';

        return (
          <Tag
            deleteIcon={<CrossSmOutlineSm />}
            color="grey"
            label={title}
            {...getTagProps({ index })}
          />
        );
      });
    },
    [getOptionLabel],
  );

  const isOptionEqualToValue = useCallback(
    (option: AutocompleteValueProps, value: AutocompleteValueProps) => {
      if (externalOptionEqualToValue) {
        return externalOptionEqualToValue(option, value);
      }

      return JSON.stringify(option) === JSON.stringify(value);
    },
    [externalOptionEqualToValue],
  );

  const renderInput = useCallback(
    (inputParams: AutocompleteRenderInputParams) => {
      const generalInputParams = {
        ...inputParams,
        inputRef,
        required,
        placeholder,
        label,
        success,
        error,
        helperText,
        size,
      };

      return ExternalRenderInput ? (
        <ExternalRenderInput {...generalInputParams} />
      ) : (
        <TextField {...generalInputParams} />
      );
    },
    [
      ExternalRenderInput,
      inputRef,
      required,
      placeholder,
      label,
      success,
      error,
      helperText,
      size,
    ],
  );

  const renderOption = useCallback(
    (
      optionProps: HTMLAttributes<HTMLLIElement> & { key?: string },
      option: AutocompleteValueProps,
      optionState: AutocompleteRenderOptionState,
    ) => {
      if (externalRenderOption) {
        return externalRenderOption(optionProps, option, optionState);
      }

      const selected = Boolean(optionProps['aria-selected']);

      return (
        <MenuItem {...optionProps} key={optionProps.id}>
          {multiple && (
            <ListItemIcon>
              <Checkbox role="menuitemcheckbox" checked={selected} />
            </ListItemIcon>
          )}
          <OverflowTypography
            rowsCount={DEFAULT_AUTOCOMPLETE_ELEMENT_ROWS_COUNT}
            {...overflowOption}
          >
            {optionProps.key}
          </OverflowTypography>
        </MenuItem>
      );
    },
    [multiple, externalRenderOption],
  );

  return (
    <MuiAutocomplete
      {...restProps}
      size={size}
      multiple={multiple}
      getOptionLabel={getOptionLabel}
      disableCloseOnSelect={multiple}
      renderTags={renderTags ?? renderDefaultTags}
      renderInput={renderInput}
      renderOption={renderOption}
      popupIcon={<ChevronDOutlineMd />}
      clearIcon={<CrossSmOutlineSm />}
      isOptionEqualToValue={isOptionEqualToValue}
      componentsProps={{ clearIndicator: { disableRipple: true } }}
      noOptionsText={noOptionsText}
      closeText={closeText}
      openText={openText}
      clearText={clearText}
      ref={ref}
    />
  );
};

export const Autocomplete = forwardRef(AutocompleteInner) as <
  AutocompleteValueProps,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
>(
  props: AutocompleteProps<
    AutocompleteValueProps,
    Multiple,
    DisableClearable,
    FreeSolo
  > & { ref?: ForwardedRef<unknown> },
) => ReturnType<typeof AutocompleteInner>;
