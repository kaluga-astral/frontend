import {
  type AutocompleteChangeReason,
  type AutocompleteRenderGetTagProps,
  type AutocompleteRenderInputParams,
  type AutocompleteRenderOptionState,
  type AutocompleteValue,
  ListItemIcon,
  Autocomplete as MuiAutocomplete,
  type AutocompleteProps as MuiAutocompleteProps,
  Popper as MuiPopper,
} from '@mui/material';
import { forwardRef, useCallback, useState } from 'react';
import type {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from 'react';
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
import { CircularProgress } from '../CircularProgress';
import { Typography } from '../Typography';

import { DEFAULT_AUTOCOMPLETE_ELEMENT_ROWS_COUNT } from './constants';
import { type AutocompleteSizes } from './enums';
import { PopperWrapper } from './styles';

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
    | 'error'
    | 'success'
    | 'helperText'
    | 'label'
    | 'required'
    | 'inputRef'
    | 'placeholder'
  > & {
    renderInput?: (
      props: TextFieldProps & Omit<AutocompleteRenderInputParams, 'size'>,
    ) => ReactNode;
    size?: AutocompleteSize;
    overflowOption?: OverflowedElementProps;
    /**
     * Текст ошибки, который будет отображаться в меню автокомплита
     * Пример использования: информирование пользователя о том, что АПИ используемого сервиса в текущий момент недоступно
     */
    loadedDataError?: string;
    /**
     * флаг, отвечающий за отображение сообщения об ошибке при загрузке данных в меню автокомплита
     */
    isLoadedDataError?: boolean;
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
    loadingText = <CircularProgress color="primary" />,
    size = 'medium',
    overflowOption,
    inputRef,
    renderTags,
    onChange: externalOnChange,
    renderInput: externalRenderInput,
    loadedDataError = 'На текущий момент сервис недоступен.',
    isLoadedDataError,
    ...restProps
  }: AutocompleteProps<
    AutocompleteValueProps,
    Multiple,
    DisableClearable,
    FreeSolo
  >,
  ref?: ForwardedRef<unknown>,
) => {
  // Убираем placeholder, если инпут пуст
  const [isEmpty, setEmpty] = useState(
    restProps.value || restProps.defaultValue || true,
  );

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
        placeholder: isEmpty ? placeholder : '',
        label,
        success,
        error,
        helperText,
        size,
      };

      if (externalRenderInput) {
        return externalRenderInput(generalInputParams);
      }

      return <TextField {...generalInputParams} />;
    },
    [
      isEmpty,
      externalRenderInput,
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
    [multiple, overflowOption, externalRenderOption],
  );

  type ValueT = AutocompleteValue<
    AutocompleteValueProps,
    Multiple,
    DisableClearable,
    FreeSolo
  >;

  // Смотрим активность пользователя, если он что-то выбрал / ввел,
  // то ставим isEmpty в false, иначе в true
  const handleOnChange = useCallback(
    (
      e: SyntheticEvent<Element, Event>,
      val: ValueT,
      reason: AutocompleteChangeReason,
    ) => {
      if (Array.isArray(val)) {
        setEmpty(val.length === 0);
      }

      if (typeof val === 'string') {
        setEmpty(val === '');
      }

      externalOnChange?.call({}, e, val, reason);
    },
    [externalOnChange],
  );

  return (
    <MuiAutocomplete
      {...restProps}
      size={size}
      multiple={multiple}
      getOptionLabel={getOptionLabel}
      disableCloseOnSelect={multiple}
      onChange={handleOnChange}
      PopperComponent={({ children, ...rest }) => (
        <MuiPopper {...rest}>
          {isLoadedDataError ? (
            <PopperWrapper>
              <Typography variant="body1" color="grey" colorIntensity="600">
                {loadedDataError}
              </Typography>
            </PopperWrapper>
          ) : (
            children
          )}
        </MuiPopper>
      )}
      renderTags={renderTags ?? renderDefaultTags}
      renderInput={renderInput}
      renderOption={renderOption}
      popupIcon={<ChevronDOutlineMd />}
      loadingText={loadingText}
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
