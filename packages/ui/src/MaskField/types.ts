import type { IMaskInputProps } from 'react-imask/dist/mixin';

import type { TextFieldProps } from '../TextField/types';

type MaskProps = IMaskInputProps<
  IMask.AnyMaskedOptions,
  boolean,
  string,
  HTMLInputElement
>;

export type MaskFieldProps = Omit<MaskProps & TextFieldProps, 'onChange'> & {
  /**
   * Обработчик изменений
   */
  onChange?: (value: MaskFieldValue) => void;
  /**
   * Кастомные определения (definitions) для более точной настройки маски
   */
  definitions?: IMask.MaskedPattern.Definitions;
};

export type MaskFieldValue = string;
