import { TextField as MuiTextField } from '@mui/material';

import { styled } from '../styles';

export const StyledTextField = styled(MuiTextField)`
  /* фикс клипа верхнего пикселя рамки */
  & fieldset {
    top: -4.5px;
  }
`;
