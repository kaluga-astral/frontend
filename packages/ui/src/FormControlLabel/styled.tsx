import { FormControlLabel } from '@mui/material';

import { styled } from '../styles';

import { FormControlLabelProps } from './types';

export const StyledFormControlLabel = styled(
  FormControlLabel
)<FormControlLabelProps>`
  margin-left: -${({ theme }) => theme.spacing(1)};
  margin-right: 0;
  & .MuiFormControlLabel-label {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;
