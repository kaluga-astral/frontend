import { FormControlLabelProps } from './types';
import { StyledFormControlLabel } from './styled';

const FormControlLabel = ({ ...props }: FormControlLabelProps) => {
  return <StyledFormControlLabel {...props} />;
};

export default FormControlLabel;
