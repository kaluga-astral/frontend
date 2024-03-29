import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  type SelectProps as MuiSelectProps,
} from '@mui/material';
import React, { type ForwardedRef, type ReactNode } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { Tag } from '../Tag';
import { FormHelperText } from '../FormHelperText';
import { CircularProgress } from '../CircularProgress';
import { MenuItem } from '../MenuItem';
import { type WithoutEmotionSpecific } from '../types';
import { forwardRefWithGeneric } from '../forwardRefWithGeneric';

import { Placeholder, ProgressWrapper, TagsWrapper } from './styles';

export type SelectProps<Value> = WithoutEmotionSpecific<
  Omit<MuiSelectProps<Value>, 'variant'>
> & {
  loading?: boolean;
  placeholder?: string;
  getOptionLabel?: (value: string | number) => string | number;
  /**
   * Добавляет вспомогательный текст под селектом
   */
  helperText?: ReactNode;
  /**
   * Скрывает вспомогательный текст под селектом
   */
  hideHelperText?: boolean;
  success?: boolean;
  error?: boolean;
  label?: string;
};

const SelectInner = <Value,>(
  {
    required,
    getOptionLabel = (value) => value,
    placeholder,
    helperText,
    hideHelperText = false,
    loading,
    success,
    children,
    error,
    label,
    fullWidth,
    ...props
  }: SelectProps<Value>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const renderValue = (selectedOptions: Value): ReactNode => {
    if (Array.isArray(selectedOptions) && selectedOptions.length) {
      return (
        <TagsWrapper>
          {selectedOptions.map((option) => {
            const optionLabel = getOptionLabel(option);

            return <Tag key={option} color="grey" label={optionLabel} />;
          })}
        </TagsWrapper>
      );
    }

    if (
      (Array.isArray(selectedOptions) || typeof selectedOptions === 'string') &&
      !selectedOptions.length
    ) {
      return placeholder;
    }

    return getOptionLabel(selectedOptions as string | number);
  };

  const isNoData = !Boolean(React.Children.count(children));

  return (
    <FormControl error={error} fullWidth={fullWidth}>
      {label && (
        <InputLabel htmlFor="grouped-select" required={required}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        {...props}
        renderValue={renderValue}
        IconComponent={ChevronDOutlineMd}
        displayEmpty
        ref={ref}
        fullWidth={fullWidth}
      >
        <Placeholder value="">{placeholder}</Placeholder>
        {loading && (
          <ProgressWrapper>
            <CircularProgress color="primary" />
          </ProgressWrapper>
        )}
        {!loading && children}
        {!loading && isNoData && <MenuItem disabled>Нет данных</MenuItem>}
      </MuiSelect>
      {!hideHelperText && (
        <FormHelperText error={error} success={success}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export const Select = forwardRefWithGeneric(SelectInner);
