import { RadioGroupProps } from '@mui/material';

import { StyledRadioGroup } from './styled';

export const RadioGroup = ({ ...props }: RadioGroupProps) => {
  return <StyledRadioGroup {...props} />;
};

export default RadioGroup;
