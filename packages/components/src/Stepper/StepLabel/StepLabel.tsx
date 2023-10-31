import {
  StepLabel as MuiStepLabel,
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material';

import { StepIcon } from '../StepIcon';
import { WithoutEmotionSpecific } from '../../types';

export type StepProps = {
  /**
   * Номер текущего шага
   */
  step?: number;
} & WithoutEmotionSpecific<MuiStepLabelProps>;

export const StepLabel = (props: StepProps) => {
  return (
    <MuiStepLabel
      StepIconComponent={({ active, error, completed, icon }) =>
        StepIcon({
          step: props.step,
          active,
          error,
          completed,
          icon,
        })
      }
      {...props}
    />
  );
};
