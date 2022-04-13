import { FC } from 'react';
import { IMaskMixin } from 'react-imask';
import type { IMaskInputProps } from 'react-imask/dist/mixin';

import { TextField, TextFieldProps } from '../TextField';

import type { MaskFieldProps } from './types';

const MaskedTextField = IMaskMixin(({ inputRef, onChange, ...props }) => {
  const textFieldProps = props as TextFieldProps;

  return <TextField inputRef={inputRef} {...textFieldProps} />;
});

export const MaskField: FC<MaskFieldProps> = ({ onChange, ...props }) => {
  const maskFieldProps = props as IMaskInputProps;

  const handleMaskFieldAccept = (value: string) => {
    onChange?.(value);
  };

  return (
    <MaskedTextField {...maskFieldProps} onAccept={handleMaskFieldAccept} />
  );
};
