import { FC } from 'react';
import { IMask, IMaskMixin } from 'react-imask';
import type { IMaskInputProps } from 'react-imask/dist/mixin';

import { TextField, TextFieldProps } from '../TextField';

import type { MaskFieldProps } from './types';

const MaskedTextField = IMaskMixin(({ inputRef, onChange, ...props }) => {
  const textFieldProps = props as TextFieldProps;

  return <TextField inputRef={inputRef} {...textFieldProps} />;
});

export const MaskField: FC<MaskFieldProps> = ({
  onChange,
  onAccept,
  ...props
}) => {
  const maskFieldProps = props as IMaskInputProps;

  const handleMaskFieldAccept = (
    value: string,
    maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
    e?: InputEvent
  ) => {
    if (onAccept) {
      return onAccept(value, maskRef, e, onChange);
    }

    onChange?.(value);
  };

  return (
    <MaskedTextField {...maskFieldProps} onAccept={handleMaskFieldAccept} />
  );
};
