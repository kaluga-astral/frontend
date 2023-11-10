import { FormControlLabel } from '@mui/material';

import { styled } from '../styles/styled';
import type { FormControlLabelProps } from '../FormControlLabel';

export const StyledFormControlLabel = styled(
  FormControlLabel,
)<FormControlLabelProps>`
  margin-right: ${({ theme }) => theme.spacing(6)};
  margin-left: -7px;
`;
