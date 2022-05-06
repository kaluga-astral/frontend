import type { IMaskInputProps } from 'react-imask/dist/mixin';

import type { TextFieldProps } from '../TextField/types';

type MaskProps = IMaskInputProps<
  IMask.AnyMaskedOptions,
  boolean,
  string,
  HTMLInputElement
>;

export type MaskFieldProps = Omit<
  MaskProps & TextFieldProps,
  'onChange' | 'onAccept'
> & {
  onChange?: (value: string) => void;
  onAccept?: (
    value: string,
    maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
    e?: InputEvent | undefined,
    onChange?: (value: string) => void
  ) => void;
  autofix?: boolean | 'pad';
};

export type MaskFieldValue = string;
