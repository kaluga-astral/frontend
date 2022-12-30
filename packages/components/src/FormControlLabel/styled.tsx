import { FormControlLabel } from '@mui/material';

import { styled } from '../styles';

import { FormControlLabelProps } from './types';

export const StyledFormControlLabel = styled(
  FormControlLabel,
)<FormControlLabelProps>`
  margin-right: 0;
  margin-left: -5px;

  & .MuiFormControlLabel-label {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`;
