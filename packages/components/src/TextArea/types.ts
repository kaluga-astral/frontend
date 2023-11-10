import type { TextFieldProps } from '../TextField';

export type TextAreaProps = Omit<TextFieldProps, 'multiline'>;
