import { type FormControlLabelProps } from './types';
import { StyledFormControlLabel } from './styled';

export const FormControlLabel = (props: FormControlLabelProps) => {
  return <StyledFormControlLabel {...props} />;
};
