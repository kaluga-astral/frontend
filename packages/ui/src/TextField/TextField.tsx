import React from 'react';
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField';

export type TextFieldProps = Omit<MuiTextFieldProps, 'variant' | 'color'> & {
  variant?: never;
  color?: never;
  success?: boolean;
};

export const TextField = (props: TextFieldProps) => {
  const { variant, success, color, ...restProps } = props;

  return (
    <MuiTextField
      variant="outlined"
      color={React.useMemo(() => {
        if (success) {
          return 'success';
        }

        return undefined;
      }, [success])}
      {...restProps}
    />
  );
};

export default TextField;
