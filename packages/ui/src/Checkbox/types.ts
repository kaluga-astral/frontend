import { CheckboxProps as MuiCheckboxProps } from '@mui/material';

export type CheckboxProps = Omit<MuiCheckboxProps, 'size' | 'color'>;
