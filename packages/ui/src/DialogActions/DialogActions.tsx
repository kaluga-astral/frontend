import {
  DialogActionsProps,
  DialogActions as MuiDialogActions,
} from '@mui/material';

export const DialogActions = ({ children, ...props }: DialogActionsProps) => {
  return <MuiDialogActions {...props}>{children}</MuiDialogActions>;
};
