import { forwardRef } from 'react';
import { IMask, IMaskMixin } from 'react-imask';
import type { IMaskInputProps } from 'react-imask/dist/mixin';

import { TextField, TextFieldProps } from '../TextField';

type MaskProps = IMaskInputProps<
  IMask.AnyMaskedOptions,
  boolean,
  string,
  HTMLInputElement
>;

export type MaskBlocks = Record<
  string,
  {
    mask: typeof IMask.MaskedRange;
    from: number;
    to: number;
    maxLength: number;
  }
>;

export type MaskFieldProps = Omit<
  Omit<
    MaskProps,
    'size' | 'defaultValue' | 'rows' | 'value' | 'label' | 'inputRef'
  > &
    TextFieldProps,
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
  /**
   * Сущность работающая в комбинации с пропсом `mask`, позволяет делать динамическую маску, в которой при удалении элементов, они заменяются подчеркиванием вместо смещения всего значения
   */
  blocks?: MaskBlocks;
};

const MaskedTextField = IMaskMixin(({ inputRef, onChange, ...props }) => {
  const textFieldProps = props as TextFieldProps;

  return <TextField inputRef={inputRef} {...textFieldProps} />;
});

export const MaskField = forwardRef<HTMLInputElement, MaskFieldProps>(
  ({ onChange, onAccept, ...props }, ref) => {
    const maskFieldProps = { unmask: true, ...props } as IMaskInputProps;

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
      <MaskedTextField
        {...maskFieldProps}
        inputRef={() => ref}
        onAccept={handleMaskFieldAccept}
      />
    );
  },
);
