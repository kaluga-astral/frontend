import { FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';

import { FormControlLabelProps } from './types';

export const StyledFormControlLabel = styled(
  FormControlLabel
)<FormControlLabelProps>`
  margin-left: -5px;
  margin-right: 0;
  & .MuiFormControlLabel-label {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;
