import styled from '@emotion/styled';
import { FormControlLabel } from '@mui/material';

import { FormControlLabelProps } from './types';

export const StyledFormControlLabel = styled(
  FormControlLabel
)<FormControlLabelProps>`
  & .MuiFormControlLabel-label {
    margin-left: 4px;
  }
`;
