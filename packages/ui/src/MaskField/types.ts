import type { IMaskInputProps } from 'react-imask/dist/mixin';

import type { TextFieldProps } from '../TextField/types';

type MaskProps = IMaskInputProps<
  IMask.AnyMaskedOptions,
  boolean,
  string,
  HTMLInputElement
>;

export type MaskFieldProps = Omit<MaskProps & TextFieldProps, 'onChange'> & {
  onChange?: (value: string) => void;
};

export type MaskFieldValue = string;
