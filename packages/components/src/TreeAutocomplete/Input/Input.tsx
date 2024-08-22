import { type SyntheticEvent, forwardRef } from 'react';
import { ChevronDOutlineMd, CloseFillSm } from '@astral/icons';

import { TextField, type TextFieldProps } from '../../TextField';
import type { TreeAutocompleteValue } from '../types';

import { useLogic } from './useLogic';
import { StyledIconButton } from './styles';

export type InputProps = Omit<TextFieldProps, 'onChange'> & {
  onChange?: (value: TreeAutocompleteValue | undefined) => void;
};

type ClearButtonProps = {
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
};

const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
  ({ onClick }, ref) => (
    <StyledIconButton ref={ref} variant="text" onClick={onClick}>
      <CloseFillSm />
    </StyledIconButton>
  ),
);

export const Input = (props: InputProps) => {
  const { isVisibleClearButton, handleClearAll } = useLogic(props);

  const { onChange, ...restProps } = props;

  return (
    <TextField
      {...restProps}
      inputProps={{ readOnly: true }}
      endAdornment={
        <>
          {isVisibleClearButton && <ClearButton onClick={handleClearAll} />}
          <ChevronDOutlineMd />
        </>
      }
    />
  );
};
