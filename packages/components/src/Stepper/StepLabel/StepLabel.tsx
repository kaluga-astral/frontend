import {
  StepLabel as MuiStepLabel,
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material';

import { StepIcon } from '../StepIcon';
import { WithoutEmotionSpecific } from '../../types';

export type StepProps = {
  /**
   * Является ли шаг в состоянии select
   */
  isSelected?: boolean;
} & WithoutEmotionSpecific<MuiStepLabelProps>;

export const StepLabel = (props: StepProps) => {
  return (
    <MuiStepLabel
      StepIconComponent={({ active, error, completed, icon }) =>
        StepIcon({
          isSelected: props.isSelected,
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
