import { DialogActions } from '@mui/material';

import { Grid, type GridProps } from '../Grid';
import { styled } from '../styles';

export const StyledDialogActions = styled(DialogActions)`
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const StyledGrid = styled(Grid)<GridProps>`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-auto-flow: column;
    justify-content: end;
  }
`;
