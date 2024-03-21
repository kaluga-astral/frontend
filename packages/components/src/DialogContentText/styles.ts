import { DialogContentText as MuiDialogContentText } from '@mui/material';

import { styled } from '../styles';

export const StyledDialogContentText = styled(MuiDialogContentText)`
  color: ${({ theme }) => theme.palette.grey[900]};
`;
