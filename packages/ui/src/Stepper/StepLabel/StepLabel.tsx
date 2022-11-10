import {
  StepLabel as MuiStepLabel,
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material';

import { StepIcon } from '../StepIcon';
import { WithoutEmotionSpecific } from '../../types';

export type StepProps = WithoutEmotionSpecific<MuiStepLabelProps>;

export const StepLabel = (props: StepProps) => {
  return <MuiStepLabel StepIconComponent={StepIcon} {...props} />;
};
