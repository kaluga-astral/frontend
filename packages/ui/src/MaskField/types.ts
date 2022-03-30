import type { IMaskInputProps } from 'react-imask/dist/mixin';

import type { TextFieldProps } from '../TextField/types';

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type MaskFieldProps = Optional<IMaskInputProps, 'mask'> & TextFieldProps;
