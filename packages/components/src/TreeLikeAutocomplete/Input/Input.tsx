import { type MouseEventHandler, forwardRef } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { type TextFieldProps } from '../../TextField';
import { type TreeListData } from '../../Tree';
import { type IconButtonProps } from '../../IconButton';
import type { TreeLikeAutocompleteValue } from '../types';

import { CLEAR_TEXT } from './constants';
import { useLogic } from './useLogic';
import {
  EndAdornmentWrapper,
  StyledCloseFillSm,
  StyledIconButton,
  StyledTagsList,
  StyledTextField,
} from './styles';

export type InputProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
  value?: TreeLikeAutocompleteValue;
  valueToRender?: Array<TreeListData> | undefined;
  onChange?: (value: TreeLikeAutocompleteValue | undefined) => void;
};

const ClearButton = ({ disabled, onClick }: IconButtonProps) => (
  <StyledIconButton
    variant="text"
    disabled={disabled}
    title={CLEAR_TEXT}
    aria-label={CLEAR_TEXT}
    onClick={onClick}
  >
    <StyledCloseFillSm />
  </StyledIconButton>
);

export const Input = forwardRef<HTMLDivElement, InputProps>(
  (props, forwardedRef) => {
    const { inputRef, isVisibleClearButton, handleClearAll } = useLogic(props);

    const { value, valueToRender, disabled, onChange, onClick, ...restProps } =
      props;

    const isValue = value ? Boolean(value.length) : false;

    const handleChange = (newValue: Array<TreeListData> | undefined) => {
      if (!newValue) {
        return onChange?.(undefined);
      }

      onChange?.(newValue.map((item) => item.id));
    };

    return (
      <StyledTextField
        {...restProps}
        value={value}
        ref={forwardedRef}
        inputRef={inputRef}
        disabled={disabled}
        inputProps={{ readOnly: true }}
        startAdornment={
          isValue && (
            <StyledTagsList
              data={valueToRender}
              keyId="id"
              isDisabled={disabled}
              getOptionLabel={(option) => option.label}
              onClick={onClick as MouseEventHandler<HTMLDivElement>}
              onChange={handleChange}
            />
          )
        }
        endAdornment={
          <EndAdornmentWrapper>
            {isVisibleClearButton && (
              <ClearButton disabled={disabled} onClick={handleClearAll} />
            )}

            <StyledIconButton variant="text" disabled={disabled}>
              <ChevronDOutlineMd />
            </StyledIconButton>
          </EndAdornmentWrapper>
        }
        onClick={onClick}
      />
    );
  },
);
