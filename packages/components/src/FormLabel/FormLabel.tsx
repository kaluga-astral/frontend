import type { FormLabelProps as MuiFormLabelProps } from '@mui/material';
import { FormLabel as MuiFormLabel } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

export type FormLabelProps = WithoutEmotionSpecific<MuiFormLabelProps>;

export const FormLabel = (props: FormLabelProps) => {
  return <MuiFormLabel {...props} />;
};
