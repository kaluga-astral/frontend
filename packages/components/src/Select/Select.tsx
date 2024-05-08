import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  type SelectProps as MuiSelectProps,
  type SelectChangeEvent,
} from '@mui/material';
import { type ForwardedRef, type ReactNode, forwardRef } from 'react';
import { ChevronDOutlineMd, CloseFillSm } from '@astral/icons';

import { FormHelperText } from '../FormHelperText';
import { CircularProgress } from '../CircularProgress';
import { MenuItem } from '../MenuItem';
import { type WithoutEmotionSpecific } from '../types';
import { forwardRefWithGeneric } from '../forwardRefWithGeneric';

import {
  Placeholder,
  ProgressWrapper,
  // StyledCrossIcon,
  StyledIconButton,
} from './styles';
import { SelectTagsList } from './SelectTagsList';
import { useLogic } from './useLogic';

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

type ClearButtonProps = {
  onClick: () => void;
};

const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
  ({ onClick }, ref) => (
    <StyledIconButton ref={ref} onClick={onClick} variant="text">
      <CloseFillSm />
    </StyledIconButton>
  ),
);

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
    onChange: externalOnChange,
    ...props
  }: SelectProps<Value>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const {
    isOpened,
    isShowingClearButton,
    isNoData,
    onClearAll,
    openSelect,
    closeSelect,
    resetButtonRef,
  } = useLogic({
    ...props,
    children,
    onChange: externalOnChange,
  });

  const renderValue = (selectedOptions: Value): ReactNode => {
    // Массив с выбранными опциями
    if (Array.isArray(selectedOptions) && selectedOptions.length) {
      const handleOnChange = externalOnChange as (
        e: SelectChangeEvent<string[]>,
      ) => void;

      return (
        <SelectTagsList
          resetButtonRef={resetButtonRef}
          openMenu={openSelect}
          onChange={handleOnChange}
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

  return (
    <FormControl error={error} fullWidth={fullWidth}>
      {label && (
        <InputLabel htmlFor="grouped-select" required={required}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        {...props}
        open={isOpened}
        onOpen={openSelect}
        onClose={closeSelect}
        renderValue={renderValue}
        IconComponent={ChevronDOutlineMd}
        displayEmpty
        ref={ref}
        fullWidth={fullWidth}
        onChange={externalOnChange}
        endAdornment={
          isShowingClearButton ? (
            <ClearButton ref={resetButtonRef} onClick={onClearAll} />
          ) : undefined
        }
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
