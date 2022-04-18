import React, { ReactNode } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { TextField } from '../TextField';
import { Tag } from '../Tag';
import { CircularProgress } from '../CircularProgress';
import { MenuItem } from '../MenuItem';

import { Placeholder, ProgressWrapper, TagsWrapper } from './styled';
import { SelectProps } from './types';

export const Select = ({
  multiple,
  loading,
  placeholder,
  getOptionsLabel,
  helperText,
  success,
  children,
  label,
  error,
  ...props
}: SelectProps) => {
  // unknown, т.к. ts ругается на несоответствие типов. По-умолчанию в selectedOptions string или string[].
  const renderValue = (selectedOptions: unknown): ReactNode => {
    if (Array.isArray(selectedOptions) && selectedOptions.length) {
      return (
        <TagsWrapper>
          {selectedOptions.map((option) => {
            const optionLabel = getOptionsLabel?.(option) || option;

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

    return (getOptionsLabel?.(selectedOptions as string | number) ||
      selectedOptions) as string;
  };

  const isNoData = !Boolean(React.Children.count(children));

  return (
    <TextField
      select
      label={label}
      helperText={helperText}
      error={error}
      success={success}
      SelectProps={{
        ...props,
        multiple,
        renderValue,
        displayEmpty: true,
        IconComponent: ChevronDOutlineMd,
      }}
    >
      <Placeholder value="">placeholder</Placeholder>

      {loading && (
        <ProgressWrapper>
          <CircularProgress color="primary" />
        </ProgressWrapper>
      )}
      {!loading && children}
      {!loading && isNoData && <MenuItem disabled>Нет данных</MenuItem>}
    </TextField>
  );
};
