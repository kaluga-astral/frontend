import {
  FormHelperText as MuiFormHelperText,
  type FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { Content } from './Content';

export type FormHelperTextProps =
  WithoutEmotionSpecific<MuiFormHelperTextProps> & {
    success?: boolean;
    error?: boolean;
  };

export const FormHelperText = ({
  children,
  success,
  error,
  ...props
}: FormHelperTextProps) => {
  return (
    <MuiFormHelperText {...props}>
      <Content error={error} success={success}>
        {children}
      </Content>
    </MuiFormHelperText>
  );
};
