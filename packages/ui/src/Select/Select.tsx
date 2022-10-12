import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { Tag } from '../Tag';
import { FormHelperText } from '../FormHelperText';
import { CircularProgress } from '../CircularProgress';
import { MenuItem } from '../MenuItem';

import { Placeholder, ProgressWrapper, TagsWrapper } from './styles';

export type SelectProps<Value> = MuiSelectProps<Value> & {
  loading?: boolean;
  placeholder?: string;
  getOptionLabel?: (value: string | number) => string | number;
  helperText?: string;
  success?: boolean;
  error?: boolean;
  label: string;
};

export const Select = <Value,>({
  getOptionLabel = (value) => value,
  placeholder,
  helperText,
  loading,
  success,
  children,
  error,
  label,
  ...props
}: SelectProps<Value>) => {
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
    <FormControl error={error}>
      <InputLabel htmlFor="grouped-select">{label}</InputLabel>
      <MuiSelect
        {...props}
        label={label}
        renderValue={renderValue}
        IconComponent={ChevronDOutlineMd}
        displayEmpty
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
      <FormHelperText error={error} success={success}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};
