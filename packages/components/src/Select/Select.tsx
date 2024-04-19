import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  type SelectProps as MuiSelectProps,
} from '@mui/material';
import React, { type ForwardedRef, type ReactNode } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { FormHelperText } from '../FormHelperText';
import { CircularProgress } from '../CircularProgress';
import { MenuItem } from '../MenuItem';
import { type WithoutEmotionSpecific } from '../types';
import { forwardRefWithGeneric } from '../forwardRefWithGeneric';

import { Placeholder, ProgressWrapper, StyledTag, TagsWrapper } from './styles';
import { useLogic } from './hooks/useLogic';

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

export type SelectArrayValueProps = {
  selectedOptions: string[];
  getOptionLabel: (value: string | number) => string | number;
};

function SelectArrayValue({
  selectedOptions,
  getOptionLabel,
}: SelectArrayValueProps) {
  const { maxItems, tagsContainerRef, handleResize } = useLogic({
    selectedOptions: selectedOptions,
    getOptionLabel,
  });

  return (
    <TagsWrapper onResize={handleResize} ref={tagsContainerRef}>
      {selectedOptions.slice(0, maxItems).map((option, i) => {
        const optionLabel = getOptionLabel(option as string | number);
        const shrinks = i == maxItems - 1 && maxItems < selectedOptions.length;

        return (
          <StyledTag
            key={option as string}
            color="grey"
            label={optionLabel}
            $shrinks={shrinks}
          />
        );
      })}

      {maxItems < selectedOptions.length && (
        <StyledTag
          key="more"
          color="grey"
          label={`+${selectedOptions.length - maxItems}`}
        />
      )}
    </TagsWrapper>
  );
}

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
    // Массив с выбранными опциями
    if (Array.isArray(selectedOptions) && selectedOptions.length) {
      return (
        <SelectArrayValue
          getOptionLabel={getOptionLabel}
          selectedOptions={selectedOptions}
        />
      );
    }

    // Пустой массив или пустая строка
    if (
      (Array.isArray(selectedOptions) || typeof selectedOptions === 'string') &&
      !selectedOptions.length
    ) {
      return placeholder;
    }

    // Строка
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
