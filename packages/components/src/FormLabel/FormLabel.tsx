import {
  FormLabel as MuiFormLabel,
  FormLabelProps as MuiFormLabelProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type FormLabelProps = WithoutEmotionSpecific<MuiFormLabelProps>;

export const FormLabel = (props: FormLabelProps) => {
  return <MuiFormLabel {...props} />;
};
