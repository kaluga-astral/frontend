import {
  Step as MuiStep,
  StepProps as MuiStepProps,
  StepLabel,
  StepLabelProps,
} from '@mui/material';

import { StepIcon } from '../StepIcon';
import { WithoutEmotionSpecific } from '../../types';

export type StepProps = WithoutEmotionSpecific<
  MuiStepProps & Pick<StepLabelProps, 'error'>
>;

export const Step = (props: StepProps) => {
  const { error, children, ...rest } = props;

  return (
    <MuiStep {...rest}>
      <StepLabel error={error} StepIconComponent={StepIcon}>
        {children}
      </StepLabel>
    </MuiStep>
  );
};
