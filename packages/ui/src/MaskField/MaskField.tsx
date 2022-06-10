import { FC } from 'react';
import { IMask, IMaskMixin } from 'react-imask';
import type { IMaskInputProps } from 'react-imask/dist/mixin';

import { TextField, TextFieldProps } from '../TextField';

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
    onChange?: (value: string) => void,
  ) => void;
  /**
   * Автоматически исправляет введенное значение под маску. Если передан 'pad' - подставляет 0 перед цифрами в дате
   */
  autofix?: boolean | 'pad';
  /**
   * Кастомные определения (definitions) для более точной настройки маски
   */
  definitions?: IMask.MaskedPattern.Definitions;
};

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
    e?: InputEvent,
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
