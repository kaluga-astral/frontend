import { SelectProps as MuiSelectProps } from '@mui/material';

import { TextFieldProps } from '../TextField';

export type SelectProps = MuiSelectProps &
  Pick<
    TextFieldProps,
    'error' | 'success' | 'SelectProps' | 'helperText' | 'label'
  > & {
    loading?: boolean;
    placeholder?: string;
  };
