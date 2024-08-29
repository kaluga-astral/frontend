import { forwardRef } from 'react';
import { ChevronDOutlineMd, CloseFillSm } from '@astral/icons';

import { TextField, type TextFieldProps } from '../../TextField';
import { type IconButtonProps } from '../../IconButton';
import type { TreeAutocompleteValue } from '../types';

import { useLogic } from './useLogic';
import { StyledIconButton } from './styles';

export type InputProps = Omit<TextFieldProps, 'onChange'> & {
  onChange?: (value: TreeAutocompleteValue | undefined) => void;
};

const ClearButton = ({ disabled, onClick }: IconButtonProps) => (
  <StyledIconButton variant="text" disabled={disabled} onClick={onClick}>
    <CloseFillSm />
  </StyledIconButton>
);

export const Input = forwardRef<HTMLDivElement, InputProps>(
  (props, forwardedRef) => {
    const { inputRef, isVisibleClearButton, handleClearAll } = useLogic(props);

    const { disabled, onChange, ...restProps } = props;

    return (
      <TextField
        {...restProps}
        ref={forwardedRef}
        inputRef={inputRef}
        disabled={disabled}
        inputProps={{ readOnly: true }}
        endAdornment={
          <>
            {isVisibleClearButton && (
              <ClearButton disabled={disabled} onClick={handleClearAll} />
            )}
            <ChevronDOutlineMd />
          </>
        }
      />
    );
  },
);
