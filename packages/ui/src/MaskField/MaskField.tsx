import { IMaskMixin } from 'react-imask';
import type { IMaskInputProps } from 'react-imask/dist/mixin';

import { TextField, TextFieldProps } from '../TextField';

import type { MaskFieldProps } from './types';

const MaskedTextField = IMaskMixin(({ inputRef, ...props }) => {
  const textFieldProps = props as TextFieldProps;

  return <TextField inputRef={inputRef} {...textFieldProps} />;
});

export const MaskField = (props: MaskFieldProps) => {
  const maskFieldProps = props as IMaskInputProps;

  return <MaskedTextField {...maskFieldProps} />;
};
